---
schema: wang-person/v1
id: p_uXFJE4D57JtN6isVFHL2bP
status: active
merged_into: null
display_name: 王進
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7CEkmW945zD4nZrhVEMmw9
        subject_person_id: p_uXFJE4D57JtN6isVFHL2bP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王進
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DK5VfiHB6z7YaKdcC3biH7
          claim_id: c_7CEkmW945zD4nZrhVEMmw9
          source_id: s_7ZBKjRNESDYNjKHAxkNBo6
          stance: supports
          locator: CBDB:139190
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（139190）
          source: &a1
            id: s_7ZBKjRNESDYNjKHAxkNBo6
            source_type: api_record
            title: 中国历代人物传记资料库：王進（CBDB 139190）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139190&o=json
            external_identifier: CBDB:139190
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.393Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_o2kQNCJTdpfeRTsyJme1cK
        subject_person_id: p_uXFJE4D57JtN6isVFHL2bP
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 593年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yf4d86SiT8wLcsaoJRhsMN
          claim_id: c_o2kQNCJTdpfeRTsyJme1cK
          source_id: s_7ZBKjRNESDYNjKHAxkNBo6
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_5395S6iKzq7N8evCGX8LhF
        subject_person_id: p_uXFJE4D57JtN6isVFHL2bP
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 659年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SEb7zSj8Kto5AKQJzSy4nT
          claim_id: c_5395S6iKzq7N8evCGX8LhF
          source_id: s_7ZBKjRNESDYNjKHAxkNBo6
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bcBuJxY5R17iACYZyDWb6z
        subject_person_id: p_uXFJE4D57JtN6isVFHL2bP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ps4rWabkPBF6yzfWhN4gtL
          claim_id: c_bcBuJxY5R17iACYZyDWb6z
          source_id: s_7ZBKjRNESDYNjKHAxkNBo6
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_gLiAliAo03o7iEisQxndfL
        subject_person_id: p_uXFJE4D57JtN6isVFHL2bP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eAGC1A1rZJ87Cd7e93QJsU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JIyXonxj3aDNecx9MXX71V
          claim_id: c_gLiAliAo03o7iEisQxndfL
          source_id: s_APRgwvUc96iFixGqw6nCNL
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xianqing 123：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_APRgwvUc96iFixGqw6nCNL
            source_type: api_record
            title: 中国历代人物传记资料库：王大義（CBDB 147586）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147586&o=json
            external_identifier: CBDB:147586
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.740Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_eAGC1A1rZJ87Cd7e93QJsU
        status: active
        display_name: 王大義
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王進

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王進 | accepted |
| birth.date | 593年 | accepted |
| death.date | 659年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_eAGC1A1rZJ87Cd7e93QJsU | 王大義 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大義（CBDB 147586）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147586&o=json)
- [中国历代人物传记资料库：王進（CBDB 139190）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139190&o=json)
