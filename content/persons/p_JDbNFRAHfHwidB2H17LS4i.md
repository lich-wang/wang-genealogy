---
schema: wang-person/v1
id: p_JDbNFRAHfHwidB2H17LS4i
status: active
merged_into: null
display_name: 王三登
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kmykDULvd4xCw3Ed8mM2De
        subject_person_id: p_JDbNFRAHfHwidB2H17LS4i
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三登
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QSkLarHZ9r1eFdeNkjjmDq
          claim_id: c_kmykDULvd4xCw3Ed8mM2De
          source_id: s_yYJZeTra3H3kPujmpgENBc
          stance: supports
          locator: CBDB:573843
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（573843）
          source: &a1
            id: s_yYJZeTra3H3kPujmpgENBc
            source_type: api_record
            title: 中国历代人物传记资料库：王三登（CBDB 573843）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573843&o=json
            external_identifier: CBDB:573843
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.665Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_55rqLtg2wQj7FxCM12eSL5
        subject_person_id: p_JDbNFRAHfHwidB2H17LS4i
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王三登，清人物。籍贯漢陽，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 573843）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XFD4GizKMT4Apk0qMqaF3W
          claim_id: c_55rqLtg2wQj7FxCM12eSL5
          source_id: s_yYJZeTra3H3kPujmpgENBc
          stance: supports
          locator: CBDB:573843
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

# 王三登

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王三登 | accepted |
| bio.summary | 王三登，清人物。籍贯漢陽，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 573843） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王三登（CBDB 573843）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573843&o=json)
