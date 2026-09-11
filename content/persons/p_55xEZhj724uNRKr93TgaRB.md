---
schema: wang-person/v1
id: p_55xEZhj724uNRKr93TgaRB
status: active
merged_into: null
display_name: 王鍊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vrSe9Up2vGSVt5Z5fnAK7J
        subject_person_id: p_55xEZhj724uNRKr93TgaRB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cRL8jnmbvGrwAPPgaeEFGY
          claim_id: c_vrSe9Up2vGSVt5Z5fnAK7J
          source_id: s_XzBmqmTwSsbd7rPRMEi3V9
          stance: supports
          locator: CBDB:247843
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（247843）
          source: &a1
            id: s_XzBmqmTwSsbd7rPRMEi3V9
            source_type: api_record
            title: 中国历代人物传记资料库：王鍊（CBDB 247843）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247843&o=json
            external_identifier: CBDB:247843
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.144Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YEkMW2AYTrFJfrNWpZ9PFp
        subject_person_id: p_55xEZhj724uNRKr93TgaRB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍊，明人物。成化十一年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 247843）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_m7QP-0zDDf_GzJ07GOaIAM
          claim_id: c_YEkMW2AYTrFJfrNWpZ9PFp
          source_id: s_XzBmqmTwSsbd7rPRMEi3V9
          stance: supports
          locator: CBDB:247843
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

# 王鍊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鍊 | accepted |
| bio.summary | 王鍊，明人物。成化十一年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 247843） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鍊（CBDB 247843）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247843&o=json)
