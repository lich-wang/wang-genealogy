---
schema: wang-person/v1
id: p_uiopQQNfoS7m2dtHM9yXTB
status: active
merged_into: null
display_name: 王知信
cbdb_id: 196293
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nh9wrptFg56mDk3S2rU56S
        subject_person_id: p_uiopQQNfoS7m2dtHM9yXTB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王知信
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7HwcQy9dTw6fedscn5umgg
          claim_id: c_nh9wrptFg56mDk3S2rU56S
          source_id: s_qqSg5FqCABAxomqyLLqBiz
          stance: supports
          locator: Q45636232
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_qqSg5FqCABAxomqyLLqBiz
            source_type: api_record
            title: 维基数据：王知信（Q45636232）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45636232
            external_identifier: Q45636232
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_dctUcLswY7kJECvf8Ksixt
          claim_id: c_nh9wrptFg56mDk3S2rU56S
          source_id: s_C4t3gsbvxkziYM7sUBHEUL
          stance: supports
          locator: CBDB:196293
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source:
            id: s_C4t3gsbvxkziYM7sUBHEUL
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王知信（196293）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=196293&o=json
            external_identifier: CBDB:196293
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9FpiwFgJ1oj1SNdR1RndbD
        subject_person_id: p_uiopQQNfoS7m2dtHM9yXTB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: person, CBDB = 196293
          language: en
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3AGFbCH5BmH61AGneGeufR
          claim_id: c_9FpiwFgJ1oj1SNdR1RndbD
          source_id: s_qqSg5FqCABAxomqyLLqBiz
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 维基数据条目描述
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_fMmQqwpamhTM9jWWqcCV9q
        subject_person_id: p_eY8EfR1RNk6RwbouvBQCRd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uiopQQNfoS7m2dtHM9yXTB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3ArazaF8MkiWXjWqLiWfFK
          claim_id: c_fMmQqwpamhTM9jWWqcCV9q
          source_id: s_B3DgWR2fHr7eJGLbWkQ9BD
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_B3DgWR2fHr7eJGLbWkQ9BD
            source_type: api_record
            title: 维基数据：王承宗（Q7967386）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q7967386
            external_identifier: Q7967386
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:22.442Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%89%BF%E5%AE%97
        - id: cs_jDmtBHdKnge92jAfqzoN9Z
          claim_id: c_fMmQqwpamhTM9jWWqcCV9q
          source_id: s_qqSg5FqCABAxomqyLLqBiz
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_MDuhsuGBQozSA5JCfr6GpZ
          claim_id: c_fMmQqwpamhTM9jWWqcCV9q
          source_id: s_k7j5o648JbsKc9SZWnKL5x
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_k7j5o648JbsKc9SZWnKL5x
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王承宗（169026）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169026&o=json
            external_identifier: CBDB:169026
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:22.583Z
            metadata_json: null
      object_person:
        id: p_eY8EfR1RNk6RwbouvBQCRd
        status: active
        display_name: 王承宗
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王知信

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王知信 | accepted |
| bio.summary | person, CBDB = 196293 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_eY8EfR1RNk6RwbouvBQCRd | 王承宗 | accepted |

## 外部来源

- [维基数据：王承宗（Q7967386）](https://www.wikidata.org/wiki/Q7967386)
- [维基数据：王知信（Q45636232）](https://www.wikidata.org/wiki/Q45636232)
- [CBDB 中国历代人物传记资料库：王承宗（169026）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169026&o=json)
- [CBDB 中国历代人物传记资料库：王知信（196293）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=196293&o=json)
