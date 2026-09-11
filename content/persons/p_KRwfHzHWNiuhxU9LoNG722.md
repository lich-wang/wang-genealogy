---
schema: wang-person/v1
id: p_KRwfHzHWNiuhxU9LoNG722
status: active
merged_into: null
display_name: 王明揚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TqyadNGrTAmAXTu79nM4PW
        subject_person_id: p_KRwfHzHWNiuhxU9LoNG722
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王明揚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nHjoNs4rdP6HYG1F7N6tL7
          claim_id: c_TqyadNGrTAmAXTu79nM4PW
          source_id: s_hc2LP8p2uEqi9JBNQyQyEc
          stance: supports
          locator: CBDB:638382
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638382）
          source: &a1
            id: s_hc2LP8p2uEqi9JBNQyQyEc
            source_type: api_record
            title: 中国历代人物传记资料库：王明揚（CBDB 638382）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638382&o=json
            external_identifier: CBDB:638382
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.610Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oCr1DvUJTnKQ15UhCDqjqZ
        subject_person_id: p_KRwfHzHWNiuhxU9LoNG722
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王明揚，清人物。籍贯江南蘇松常鎮太道，入仕行伍，曾任中軍守備。（中国历代人物传记资料库 CBDB 638382）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fBBjLNPXGGMSiRG35aDXio
          claim_id: c_oCr1DvUJTnKQ15UhCDqjqZ
          source_id: s_hc2LP8p2uEqi9JBNQyQyEc
          stance: supports
          locator: CBDB:638382
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

# 王明揚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王明揚 | accepted |
| bio.summary | 王明揚，清人物。籍贯江南蘇松常鎮太道，入仕行伍，曾任中軍守備。（中国历代人物传记资料库 CBDB 638382） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王明揚（CBDB 638382）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638382&o=json)
