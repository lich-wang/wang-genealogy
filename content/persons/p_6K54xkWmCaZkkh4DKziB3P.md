---
schema: wang-person/v1
id: p_6K54xkWmCaZkkh4DKziB3P
status: active
merged_into: null
display_name: 王茹
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JzhCABwM7rUksAjPncSkHA
        subject_person_id: p_6K54xkWmCaZkkh4DKziB3P
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王茹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6yLjcGPreQD5yjCZEVmxFU
          claim_id: c_JzhCABwM7rUksAjPncSkHA
          source_id: s_LgtGr7YpJKrive93Q56QiG
          stance: supports
          locator: CBDB:36929
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（36929）
          source: &a1
            id: s_LgtGr7YpJKrive93Q56QiG
            source_type: api_record
            title: 中国历代人物传记资料库：王茹（CBDB 36929）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36929&o=json
            external_identifier: CBDB:36929
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.186Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BUWDBVEcjELaQM7HkUjcZ3
        subject_person_id: p_6K54xkWmCaZkkh4DKziB3P
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王茹，宋人物。籍贯巢縣。（中国历代人物传记资料库 CBDB 36929）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6cpCmsgBYLTwrEXkf3hb5t
          claim_id: c_BUWDBVEcjELaQM7HkUjcZ3
          source_id: s_LgtGr7YpJKrive93Q56QiG
          stance: supports
          locator: CBDB:36929
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_8iO2MiPMb-p0Ho40nQYeDO
        subject_person_id: p_qdfj8n9aJt992f6xYnsVk6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6K54xkWmCaZkkh4DKziB3P
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pC8HgJx2E3RztmG2g_a0nd
          claim_id: c_8iO2MiPMb-p0Ho40nQYeDO
          source_id: s_wUgfrbBVWYOrdJ_Hlgox8t
          stance: supports
          locator: CBDB 亲属：父（KinPerson 1786）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_wUgfrbBVWYOrdJ_Hlgox8t
            source_type: api_record
            title: 中国历代人物传记资料库：王茹（CBDB 36929）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36929&o=json
            external_identifier: CBDB:36929
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qdfj8n9aJt992f6xYnsVk6
        status: active
        display_name: 王之道
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王茹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王茹 | accepted |
| bio.summary | 王茹，宋人物。籍贯巢縣。（中国历代人物传记资料库 CBDB 36929） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qdfj8n9aJt992f6xYnsVk6 | 王之道 | accepted |

## 外部来源

- [中国历代人物传记资料库：王茹（CBDB 36929）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36929&o=json)
