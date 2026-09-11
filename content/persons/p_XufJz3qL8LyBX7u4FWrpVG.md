---
schema: wang-person/v1
id: p_XufJz3qL8LyBX7u4FWrpVG
status: active
merged_into: null
display_name: 王琢
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ryWbX5qMyis6wVvYihre2m
        subject_person_id: p_XufJz3qL8LyBX7u4FWrpVG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sC1buEgcL1RrZ5srGUB38j
          claim_id: c_ryWbX5qMyis6wVvYihre2m
          source_id: s_Sg2dH67ZKoCwNzb8EZzvq6
          stance: supports
          locator: CBDB:190165
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（190165）
          source: &a1
            id: s_Sg2dH67ZKoCwNzb8EZzvq6
            source_type: api_record
            title: 中国历代人物传记资料库：王琢（CBDB 190165）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190165&o=json
            external_identifier: CBDB:190165
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.317Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_NNsaDh18dPnDo3SukLE6C2
        subject_person_id: p_XufJz3qL8LyBX7u4FWrpVG
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1022年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WWd4Ka545gJfFMDAx1UAag
          claim_id: c_NNsaDh18dPnDo3SukLE6C2
          source_id: s_Sg2dH67ZKoCwNzb8EZzvq6
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UXsEQsAwf5pfmJn5jecuVV
        subject_person_id: p_XufJz3qL8LyBX7u4FWrpVG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琢（卒于1022年），宋人物。籍贯建州，曾任指揮使。（中国历代人物传记资料库 CBDB 190165）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_64p5cLGg6sAttST6RZ24zt
          claim_id: c_UXsEQsAwf5pfmJn5jecuVV
          source_id: s_Sg2dH67ZKoCwNzb8EZzvq6
          stance: supports
          locator: CBDB:190165
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_f_L7zREsk1bt9Z2cf851CG
        subject_person_id: p_dHK6S2CF83o7bsW1omDPPe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XufJz3qL8LyBX7u4FWrpVG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2-PvaPFvv6gC5WZbsaywC3
          claim_id: c_f_L7zREsk1bt9Z2cf851CG
          source_id: s_V2fSUyMizNfJqvRAfkJqCX
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_V2fSUyMizNfJqvRAfkJqCX
            source_type: api_record
            title: 中国历代人物传记资料库：王裕（CBDB 144860）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=144860&o=json
            external_identifier: CBDB:144860
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.636Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dHK6S2CF83o7bsW1omDPPe
        status: active
        display_name: 王裕
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王琢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琢 | accepted |
| death.date | 1022年 | accepted |
| bio.summary | 王琢（卒于1022年），宋人物。籍贯建州，曾任指揮使。（中国历代人物传记资料库 CBDB 190165） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dHK6S2CF83o7bsW1omDPPe | 王裕 | accepted |

## 外部来源

- [中国历代人物传记资料库：王裕（CBDB 144860）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=144860&o=json)
- [中国历代人物传记资料库：王琢（CBDB 190165）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190165&o=json)
