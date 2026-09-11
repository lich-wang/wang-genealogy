---
schema: wang-person/v1
id: p_oD3PJjMLUawsYEVt6qw1j1
status: active
merged_into: null
display_name: 王國英
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_z8mSBjnieyYsGMyXx6qaLJ
        subject_person_id: p_oD3PJjMLUawsYEVt6qw1j1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國英
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jkGYG6Nc5Gq8DZ45KV6Q9J
          claim_id: c_z8mSBjnieyYsGMyXx6qaLJ
          source_id: s_Heu5x25QQ1h2pK2oPcnqFx
          stance: supports
          locator: CBDB:562014
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（562014）
          source: &a1
            id: s_Heu5x25QQ1h2pK2oPcnqFx
            source_type: api_record
            title: 中国历代人物传记资料库：王國英（CBDB 562014）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=562014&o=json
            external_identifier: CBDB:562014
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.766Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KqFMkUHEGoRR2vsbvXNNP8
        subject_person_id: p_oD3PJjMLUawsYEVt6qw1j1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王國英，明人物。籍贯會稽，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 562014）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_c1QMETdb2F885uNRx5OPHC
          claim_id: c_KqFMkUHEGoRR2vsbvXNNP8
          source_id: s_Heu5x25QQ1h2pK2oPcnqFx
          stance: supports
          locator: CBDB:562014
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_iP02Cq0LHSoNUBuiRx96Cq
        subject_person_id: p_woHWnXhHgoWAiNUYfCrQyw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oD3PJjMLUawsYEVt6qw1j1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_owdsuQvcdry86-4FvOV_pq
          claim_id: c_iP02Cq0LHSoNUBuiRx96Cq
          source_id: s_Heu5x25QQ1h2pK2oPcnqFx
          stance: supports
          locator: 紹興府志:八十卷，lgid=316492：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_woHWnXhHgoWAiNUYfCrQyw
        status: active
        display_name: 王觀昉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_ioSKS4-N0a3ea5oF_cTip_
        subject_person_id: p_uS7V4P4KMenpgfUZzDHcZ5
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_oD3PJjMLUawsYEVt6qw1j1
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iE2-UWUFLJn4Qi1rrcOJ7y
          claim_id: c_ioSKS4-N0a3ea5oF_cTip_
          source_id: s_Heu5x25QQ1h2pK2oPcnqFx
          stance: supports
          locator: 紹興府志:八十卷，lgid=316492：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_uS7V4P4KMenpgfUZzDHcZ5
        status: active
        display_name: 王應遴
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王國英

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國英 | accepted |
| bio.summary | 王國英，明人物。籍贯會稽，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 562014） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_woHWnXhHgoWAiNUYfCrQyw | 王觀昉 | accepted |
| ancestors | p_uS7V4P4KMenpgfUZzDHcZ5 | 王應遴 | accepted |

## 外部来源

- [中国历代人物传记资料库：王國英（CBDB 562014）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=562014&o=json)
