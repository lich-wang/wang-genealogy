---
schema: wang-person/v1
id: p_HXk3y1PfVW8CfdPTWH9M9P
status: active
merged_into: null
display_name: 王家穎
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HaoYm3xTNYrTP8Se52FtXU
        subject_person_id: p_HXk3y1PfVW8CfdPTWH9M9P
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家穎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vaJChL5EBeGKAembYbXGBG
          claim_id: c_HaoYm3xTNYrTP8Se52FtXU
          source_id: s_U9tGJ8LVMAMzANNnWLjkav
          stance: supports
          locator: CBDB:695669
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（695669）
          source: &a1
            id: s_U9tGJ8LVMAMzANNnWLjkav
            source_type: api_record
            title: 中国历代人物传记资料库：王家穎（CBDB 695669）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=695669&o=json
            external_identifier: CBDB:695669
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.541Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kKPsUx7mGnJPxd6oktDvZd
        subject_person_id: p_HXk3y1PfVW8CfdPTWH9M9P
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hqHxLa7JPKnFuzb9QNr9aN
          claim_id: c_kKPsUx7mGnJPxd6oktDvZd
          source_id: s_U9tGJ8LVMAMzANNnWLjkav
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
        id: c_Gl4hYoh_aFg-dJW5HAjjWo
        subject_person_id: p_HXk3y1PfVW8CfdPTWH9M9P
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RrLAmAJ53wbERRsLzaVq3N
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Tz8jr35VKV8HHE19utJA29
          claim_id: c_Gl4hYoh_aFg-dJW5HAjjWo
          source_id: s_ueKRmgQtBBGaX8bNh3YAmE
          stance: supports
          locator: "海鹽縣志: 二十二卷(光緒)，lgid=294177：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ueKRmgQtBBGaX8bNh3YAmE
            source_type: api_record
            title: 中国历代人物传记资料库：王煒（CBDB 56203）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56203&o=json
            external_identifier: CBDB:56203
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.758Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_RrLAmAJ53wbERRsLzaVq3N
        status: active
        display_name: 王煒
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王家穎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王家穎 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_RrLAmAJ53wbERRsLzaVq3N | 王煒 | accepted |

## 外部来源

- [中国历代人物传记资料库：王家穎（CBDB 695669）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=695669&o=json)
- [中国历代人物传记资料库：王煒（CBDB 56203）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56203&o=json)
