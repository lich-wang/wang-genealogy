---
schema: wang-person/v1
id: p_MvdGFnhj1EQnLBNV2b5DR9
status: active
merged_into: null
display_name: 王宥
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pENLDi3M2VGz57nJcyKC3V
        subject_person_id: p_MvdGFnhj1EQnLBNV2b5DR9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kaucPL1jGVuhSFC737E7EK
          claim_id: c_pENLDi3M2VGz57nJcyKC3V
          source_id: s_Ru35Z2PyYiCCFegVKc97x5
          stance: supports
          locator: CBDB:220115
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（220115）
          source: &a1
            id: s_Ru35Z2PyYiCCFegVKc97x5
            source_type: api_record
            title: 中国历代人物传记资料库：王宥（CBDB 220115）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220115&o=json
            external_identifier: CBDB:220115
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.294Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6i3LRRDT72QMwRQMuFZzwH
        subject_person_id: p_MvdGFnhj1EQnLBNV2b5DR9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xasTfiuUJc3HpducQ5Zr42
          claim_id: c_6i3LRRDT72QMwRQMuFZzwH
          source_id: s_Ru35Z2PyYiCCFegVKc97x5
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_7AxKR0aZzZlj9gcQ_KEfd4
        subject_person_id: p_W1u9oKcXenmwqBgULRmE5G
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MvdGFnhj1EQnLBNV2b5DR9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6ZS0gzAyv6uy5Iodl0e5lu
          claim_id: c_7AxKR0aZzZlj9gcQ_KEfd4
          source_id: s_dZiEcnZ4AKZh3HXJzDUpCr
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第七十二名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: &a2
            id: s_dZiEcnZ4AKZh3HXJzDUpCr
            source_type: api_record
            title: 中国历代人物传记资料库：王慎德（CBDB 206584）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206584&o=json
            external_identifier: CBDB:206584
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.897Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_W1u9oKcXenmwqBgULRmE5G
        status: active
        display_name: 王孟璿
        merged_into_person_id: null
  children:
    - claim:
        id: c_U42WbGqMBWhLZIirIMVRid
        subject_person_id: p_MvdGFnhj1EQnLBNV2b5DR9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EoXnHjFHxPjhcD8KsqKTGz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FWGw7VY6GGpTLcQaNsbvZA
          claim_id: c_U42WbGqMBWhLZIirIMVRid
          source_id: s_dZiEcnZ4AKZh3HXJzDUpCr
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第七十二名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a2
      object_person:
        id: p_EoXnHjFHxPjhcD8KsqKTGz
        status: active
        display_name: 王訪
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王宥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宥 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_W1u9oKcXenmwqBgULRmE5G | 王孟璿 | accepted |
| children | p_EoXnHjFHxPjhcD8KsqKTGz | 王訪 | accepted |

## 外部来源

- [中国历代人物传记资料库：王慎德（CBDB 206584）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206584&o=json)
- [中国历代人物传记资料库：王宥（CBDB 220115）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220115&o=json)
