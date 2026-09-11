---
schema: wang-person/v1
id: p_W2w6i771SShQ7GG5BGMNEp
status: active
merged_into: null
display_name: 王安廷
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Asqyesb5bidAh9BwAfavQh
        subject_person_id: p_W2w6i771SShQ7GG5BGMNEp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安廷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pCv5ZDKYyAk4qmy4mNXNA5
          claim_id: c_Asqyesb5bidAh9BwAfavQh
          source_id: s_8mNADay8zXMTB2EAUpsYQY
          stance: supports
          locator: CBDB:637079
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637079）
          source: &a1
            id: s_8mNADay8zXMTB2EAUpsYQY
            source_type: api_record
            title: 中国历代人物传记资料库：王安廷（CBDB 637079）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637079&o=json
            external_identifier: CBDB:637079
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.197Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2b4nAi7Wq4tECVf1PHCaWc
        subject_person_id: p_W2w6i771SShQ7GG5BGMNEp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安廷，清人物。籍贯楚雄，入仕鄉貢舉人，曾任復設訓導。（中国历代人物传记资料库 CBDB 637079）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nAGIH9GdPC_wWNCtbTD-G_
          claim_id: c_2b4nAi7Wq4tECVf1PHCaWc
          source_id: s_8mNADay8zXMTB2EAUpsYQY
          stance: supports
          locator: CBDB:637079
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王安廷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王安廷 | accepted |
| bio.summary | 王安廷，清人物。籍贯楚雄，入仕鄉貢舉人，曾任復設訓導。（中国历代人物传记资料库 CBDB 637079） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王安廷（CBDB 637079）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637079&o=json)
