---
schema: wang-person/v1
id: p_MSQsMJN57yesJR4aT7KBj8
status: active
merged_into: null
display_name: 王鴻舉
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_egFNycAy73bGaNMKNzyZrZ
        subject_person_id: p_MSQsMJN57yesJR4aT7KBj8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鴻舉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mCHKzQFGruCYBmEys6xDfD
          claim_id: c_egFNycAy73bGaNMKNzyZrZ
          source_id: s_J2gf3zN3VsT77EdTfJD4nC
          stance: supports
          locator: CBDB:27285
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（27285）
          source: &a1
            id: s_J2gf3zN3VsT77EdTfJD4nC
            source_type: api_record
            title: 中国历代人物传记资料库：王鴻舉（CBDB 27285）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=27285&o=json
            external_identifier: CBDB:27285
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.954Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yzUY4paHcu716x7KenLF5q
        subject_person_id: p_MSQsMJN57yesJR4aT7KBj8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6JHSdwm32BKT85faM4QJH1
          claim_id: c_yzUY4paHcu716x7KenLF5q
          source_id: s_J2gf3zN3VsT77EdTfJD4nC
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
        id: c_OboDh79Zl36r-YPsSxk5a-
        subject_person_id: p_sAHyfWv3qVkLkhw3tCMiF7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MSQsMJN57yesJR4aT7KBj8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_M9-jWpb-xWXzM1EB2w8g6J
          claim_id: c_OboDh79Zl36r-YPsSxk5a-
          source_id: s_Fc85A5ip7bXxeuNbE5XAQq
          stance: supports
          locator: 宋人傳記資料索引(電子版)，2053：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Fc85A5ip7bXxeuNbE5XAQq
            source_type: api_record
            title: 中国历代人物传记资料库：王端禮（CBDB 27284）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=27284&o=json
            external_identifier: CBDB:27284
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_sAHyfWv3qVkLkhw3tCMiF7
        status: active
        display_name: 王端禮
        merged_into_person_id: null
  children:
    - claim:
        id: c_Y8vaOV_l1xrMUVtHrufyoy
        subject_person_id: p_MSQsMJN57yesJR4aT7KBj8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1QMJApNnBCwd6AmuthVh9t
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__pu02kyC2bmTpb7cLLaniO
          claim_id: c_Y8vaOV_l1xrMUVtHrufyoy
          source_id: s_WJeWLEa1EZKaqA1RjeHZsZ
          stance: supports
          locator: CBDB 双向互证（父 王鴻舉 ⇄ 子 王大臨）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_WJeWLEa1EZKaqA1RjeHZsZ
            source_type: api_record
            title: 中国历代人物传记资料库：王大臨（CBDB 27281）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=27281&o=json
            external_identifier: CBDB:27281
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.953Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1QMJApNnBCwd6AmuthVh9t
        status: active
        display_name: 王大臨
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鴻舉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鴻舉 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_sAHyfWv3qVkLkhw3tCMiF7 | 王端禮 | accepted |
| children | p_1QMJApNnBCwd6AmuthVh9t | 王大臨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大臨（CBDB 27281）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=27281&o=json)
- [中国历代人物传记资料库：王端禮（CBDB 27284）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=27284&o=json)
- [中国历代人物传记资料库：王鴻舉（CBDB 27285）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=27285&o=json)
