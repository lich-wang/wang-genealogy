---
schema: wang-person/v1
id: p_7hdifusS7Dg3MrDzpyw62T
status: active
merged_into: null
display_name: 王誕
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1m3yEoX2B6h6qxf6VnbvEQ
        subject_person_id: p_7hdifusS7Dg3MrDzpyw62T
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王誕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Z4yqpQFnyH3cbAW652Ht7L
          claim_id: c_1m3yEoX2B6h6qxf6VnbvEQ
          source_id: s_YwGVHfyYw8PYR2V1Swhw2n
          stance: supports
          locator: CBDB:468023
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（468023）
          source: &a1
            id: s_YwGVHfyYw8PYR2V1Swhw2n
            source_type: api_record
            title: 中国历代人物传记资料库：王誕（CBDB 468023）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=468023&o=json
            external_identifier: CBDB:468023
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.079Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hELK7sp37vZeSFcRxMTNSN
        subject_person_id: p_7hdifusS7Dg3MrDzpyw62T
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王誕，字茂世，琅邪臨沂人，祖王恬、父王混，太保王弘從兄。少有才藻，晉末劉宋間歷吳國內史、尚書吏部郎，襲爵雉鄉侯（《宋書·王誕傳》）。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_H4-nnrJ2D_TCP3Cc6Jfxs1
          claim_id: c_hELK7sp37vZeSFcRxMTNSN
          source_id: s_qRdKZeUVl8id3V9uA7_0GZ
          stance: supports
          locator: 宋書/卷52·王誕傳
          quotation: null
          interpretation_note: 依正史列传原文重写简介。
          source:
            id: s_qRdKZeUVl8id3V9uA7_0GZ
            source_type: website
            title: 维基文库：宋書/卷52·王誕
            creator: 维基文库贡献者
            publisher: 维基媒体基金会
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/宋書/卷52
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-14T02:01:15.894Z
            metadata_json: null
        - id: cs_vjfchXnmUKyqePIu2F8pOo
          claim_id: c_hELK7sp37vZeSFcRxMTNSN
          source_id: s_YwGVHfyYw8PYR2V1Swhw2n
          stance: supports
          locator: CBDB:468023
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
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

# 王誕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王誕 | accepted |
| bio.summary | 王誕，字茂世，琅邪臨沂人，祖王恬、父王混，太保王弘從兄。少有才藻，晉末劉宋間歷吳國內史、尚書吏部郎，襲爵雉鄉侯（《宋書·王誕傳》）。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [维基文库：宋書/卷52·王誕](https://zh.wikisource.org/wiki/宋書/卷52)
- [中国历代人物传记资料库：王誕（CBDB 468023）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=468023&o=json)
