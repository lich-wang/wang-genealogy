---
schema: wang-person/v1
id: p_21iPF9Hs9mqcdz5y5kcuFG
status: active
merged_into: null
display_name: 王星
cbdb_id: 35584
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SGEwKUvTwX5eVrxRkj7WVN
        subject_person_id: p_21iPF9Hs9mqcdz5y5kcuFG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王星，宋人物。CBDB 记录其籍贯记录为鄞縣，身份包括早卒(未成年而卒)、未婚而卒。中国历代人物传记资料库（CBDB）以人物编号 35584 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_WQpDG6usk1hbCgb2yxEMCn
          claim_id: c_SGEwKUvTwX5eVrxRkj7WVN
          source_id: s_EnRXDLDBHkEgsVqm8iPbG4
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_EnRXDLDBHkEgsVqm8iPbG4
            source_type: api_record
            title: 维基数据：王星（Q45426524）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45426524
            external_identifier: Q45426524
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:15.653Z
            metadata_json: null
        - id: cs_CSimt6I2FYbmS6yN6J0_kP
          claim_id: c_SGEwKUvTwX5eVrxRkj7WVN
          source_id: s_qfzh7XxepommBRx6woQLiE
          stance: supports
          locator: CBDB:35584
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_qfzh7XxepommBRx6woQLiE
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王星（35584）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35584&o=json
            external_identifier: CBDB:35584
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:15.796Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_NF9zcZKiYNJ8MwKRQfJPn4
        subject_person_id: p_21iPF9Hs9mqcdz5y5kcuFG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王星
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_FLx37KGte2jv2ZfyBysWz9
          claim_id: c_NF9zcZKiYNJ8MwKRQfJPn4
          source_id: s_qfzh7XxepommBRx6woQLiE
          stance: supports
          locator: Q45426524
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_iDTFu2JQqajqBFDWsGLRe8
          claim_id: c_NF9zcZKiYNJ8MwKRQfJPn4
          source_id: s_EnRXDLDBHkEgsVqm8iPbG4
          stance: supports
          locator: Q45426524
          quotation: null
          interpretation_note: null
          source:
            id: s_EnRXDLDBHkEgsVqm8iPbG4
            source_type: api_record
            title: 维基数据：王星（Q45426524）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45426524
            external_identifier: Q45426524
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:15.653Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_sRuw8zNmXP3qo6TL7kRveL
        subject_person_id: p_iwBVuUwJmW9x68bfe9dwKN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_21iPF9Hs9mqcdz5y5kcuFG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VpALxP6qXFSc5xwmka86pB
          claim_id: c_sRuw8zNmXP3qo6TL7kRveL
          source_id: s_EnRXDLDBHkEgsVqm8iPbG4
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_yaFFWbYkTDYCtavPvBDy22
          claim_id: c_sRuw8zNmXP3qo6TL7kRveL
          source_id: s_519ciMBC9V6CMSxr6uQyWp
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_519ciMBC9V6CMSxr6uQyWp
            source_type: api_record
            title: 维基数据：王伯庠（Q18110186）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q18110186
            external_identifier: Q18110186
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:58:55.754Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BC%AF%E5%BA%A0
        - id: cs_QKi6z9MEnfnBzZxjXPGVde
          claim_id: c_sRuw8zNmXP3qo6TL7kRveL
          source_id: s_o6fwhY8EBNrs3ZN82gocSx
          stance: supports
          locator: 亲属关系：長子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_o6fwhY8EBNrs3ZN82gocSx
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王伯庠（17444）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17444&o=json
            external_identifier: CBDB:17444
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:58:55.897Z
            metadata_json: null
      object_person:
        id: p_iwBVuUwJmW9x68bfe9dwKN
        status: active
        display_name: 王伯庠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王星

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王星，宋人物。CBDB 记录其籍贯记录为鄞縣，身份包括早卒(未成年而卒)、未婚而卒。中国历代人物传记资料库（CBDB）以人物编号 35584 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王星 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_iwBVuUwJmW9x68bfe9dwKN | 王伯庠 | accepted |

## 外部来源

- [维基数据：王伯庠（Q18110186）](https://www.wikidata.org/wiki/Q18110186)
- [维基数据：王星（Q45426524）](https://www.wikidata.org/wiki/Q45426524)
- [CBDB 中国历代人物传记资料库：王伯庠（17444）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17444&o=json)
- [CBDB 中国历代人物传记资料库：王星（35584）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35584&o=json)
