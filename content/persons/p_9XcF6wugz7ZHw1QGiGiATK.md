---
schema: wang-person/v1
id: p_9XcF6wugz7ZHw1QGiGiATK
status: active
merged_into: null
display_name: 王僧辯
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ez2ia2PnXpYi99R2Fz8yoF
        subject_person_id: p_9XcF6wugz7ZHw1QGiGiATK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王僧辯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FB1Mm8L4F18AH9426s2F3d
          claim_id: c_ez2ia2PnXpYi99R2Fz8yoF
          source_id: s_JiBnDmK9ZLdsDEcrUCX69A
          stance: supports
          locator: CBDB:465999
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（465999）
          source: &a1
            id: s_JiBnDmK9ZLdsDEcrUCX69A
            source_type: api_record
            title: 中国历代人物传记资料库：王僧辯（CBDB 465999）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=465999&o=json
            external_identifier: CBDB:465999
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.955Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1hJsNSa4ehNXKRoV3X87gq
        subject_person_id: p_9XcF6wugz7ZHw1QGiGiATK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王僧辯，字君才，太原祁人，右衛將軍王神念之子。梁末名將，大都督，太清中平定侯景之亂，歷侍中、太尉、大司馬。承聖四年為陳霸先所襲，敗死（《梁書·王僧辯傳》）。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_KL2P7dH2qCVab2uCCf60iC
          claim_id: c_1hJsNSa4ehNXKRoV3X87gq
          source_id: s_Ri4bkGzrK_Uq2p8x7s7mA9
          stance: supports
          locator: 梁書/卷45·王僧辯傳
          quotation: null
          interpretation_note: 依正史列传原文重写简介。
          source:
            id: s_Ri4bkGzrK_Uq2p8x7s7mA9
            source_type: website
            title: 维基文库：梁書/卷45·王僧辯
            creator: 维基文库贡献者
            publisher: 维基媒体基金会
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/梁書/卷45
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-14T02:01:15.894Z
            metadata_json: null
        - id: cs_wamCPYWxRpMzJXF3oR_oht
          claim_id: c_1hJsNSa4ehNXKRoV3X87gq
          source_id: s_JiBnDmK9ZLdsDEcrUCX69A
          stance: supports
          locator: CBDB:465999
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

# 王僧辯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王僧辯 | accepted |
| bio.summary | 王僧辯，字君才，太原祁人，右衛將軍王神念之子。梁末名將，大都督，太清中平定侯景之亂，歷侍中、太尉、大司馬。承聖四年為陳霸先所襲，敗死（《梁書·王僧辯傳》）。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [维基文库：梁書/卷45·王僧辯](https://zh.wikisource.org/wiki/梁書/卷45)
- [中国历代人物传记资料库：王僧辯（CBDB 465999）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=465999&o=json)
