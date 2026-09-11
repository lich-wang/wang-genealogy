---
schema: wang-person/v1
id: p_HBuk6Yg1t73w9n6CJ9NqXo
status: active
merged_into: null
display_name: 王仕縉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LtWQSjaCYePfQV79LCMnDY
        subject_person_id: p_HBuk6Yg1t73w9n6CJ9NqXo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仕縉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zEjcNid7RE7Jy5LRk4qe13
          claim_id: c_LtWQSjaCYePfQV79LCMnDY
          source_id: s_B3xW1dU1PBE5EDnEoX3EMX
          stance: supports
          locator: CBDB:635903
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635903）
          source: &a1
            id: s_B3xW1dU1PBE5EDnEoX3EMX
            source_type: api_record
            title: 中国历代人物传记资料库：王仕縉（CBDB 635903）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635903&o=json
            external_identifier: CBDB:635903
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.823Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UZh8mNmUSXAMFe7QiYWeCH
        subject_person_id: p_HBuk6Yg1t73w9n6CJ9NqXo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仕縉，清人物。籍贯重慶府，入仕廩貢生，曾任訓導。（中国历代人物传记资料库 CBDB 635903）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zDuaIcST48VxB4y_u41CXT
          claim_id: c_UZh8mNmUSXAMFe7QiYWeCH
          source_id: s_B3xW1dU1PBE5EDnEoX3EMX
          stance: supports
          locator: CBDB:635903
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

# 王仕縉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仕縉 | accepted |
| bio.summary | 王仕縉，清人物。籍贯重慶府，入仕廩貢生，曾任訓導。（中国历代人物传记资料库 CBDB 635903） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仕縉（CBDB 635903）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635903&o=json)
