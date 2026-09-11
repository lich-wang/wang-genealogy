---
schema: wang-person/v1
id: p_XkqnRRn8V45uAfqMav2HSb
status: active
merged_into: null
display_name: 王瑄
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vQAFme1y3Wd7ZrQiRcYS69
        subject_person_id: p_XkqnRRn8V45uAfqMav2HSb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CF54TG8y6axDjUmHjKaFNC
          claim_id: c_vQAFme1y3Wd7ZrQiRcYS69
          source_id: s_n4cK44hiDgtM7A8mJ7mgEx
          stance: supports
          locator: CBDB:212508
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（212508）
          source: &a1
            id: s_n4cK44hiDgtM7A8mJ7mgEx
            source_type: api_record
            title: 中国历代人物传记资料库：王瑄（CBDB 212508）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212508&o=json
            external_identifier: CBDB:212508
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.087Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WwUpeiiBVV6FUELnLHKuvC
        subject_person_id: p_XkqnRRn8V45uAfqMav2HSb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑄，明人物。萬曆二年進士。（中国历代人物传记资料库 CBDB 212508）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_g2iw4DyWGTdejcyEFqBiHd
          claim_id: c_WwUpeiiBVV6FUELnLHKuvC
          source_id: s_n4cK44hiDgtM7A8mJ7mgEx
          stance: supports
          locator: CBDB:212508
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
  descendants:
    - claim:
        id: c_a4AJj34jYkCiyVttxNwBd9
        subject_person_id: p_XkqnRRn8V45uAfqMav2HSb
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_A4DQB8jxPM4hHSSP72EbgN
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oU7yJJY9JOYw0eWMRucT9-
          claim_id: c_a4AJj34jYkCiyVttxNwBd9
          source_id: s_fn8gqdmgeo5JPqtpGG2pZp
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第二甲第十八名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_fn8gqdmgeo5JPqtpGG2pZp
            source_type: api_record
            title: 中国历代人物传记资料库：王任（CBDB 206037）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206037&o=json
            external_identifier: CBDB:206037
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.880Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_A4DQB8jxPM4hHSSP72EbgN
        status: active
        display_name: 王任
        merged_into_person_id: null
  other: []
---

# 王瑄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑄 | accepted |
| bio.summary | 王瑄，明人物。萬曆二年進士。（中国历代人物传记资料库 CBDB 212508） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_A4DQB8jxPM4hHSSP72EbgN | 王任 | accepted |

## 外部来源

- [中国历代人物传记资料库：王任（CBDB 206037）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206037&o=json)
- [中国历代人物传记资料库：王瑄（CBDB 212508）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212508&o=json)
