---
schema: wang-person/v1
id: p_TApWWNZP9pM6Nh9W49PDnW
status: active
merged_into: null
display_name: 王繼榖
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RRen4zC4rKLjJ6J5JCCRZC
        subject_person_id: p_TApWWNZP9pM6Nh9W49PDnW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼榖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iKjMpgXBK4HrXmP7VVaba7
          claim_id: c_RRen4zC4rKLjJ6J5JCCRZC
          source_id: s_DnGLX9hnET2GHRQrdPQkAc
          stance: supports
          locator: CBDB:69481
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69481）
          source: &a1
            id: s_DnGLX9hnET2GHRQrdPQkAc
            source_type: api_record
            title: 中国历代人物传记资料库：王繼榖（CBDB 69481）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69481&o=json
            external_identifier: CBDB:69481
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.133Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Ej477HaVfNjDVXcSUVaQtJ
        subject_person_id: p_TApWWNZP9pM6Nh9W49PDnW
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1852年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xRQdVZ2VbVwDjMcFmayFoU
          claim_id: c_Ej477HaVfNjDVXcSUVaQtJ
          source_id: s_DnGLX9hnET2GHRQrdPQkAc
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_DC9hCqwYG5JLqHWZw9b53e
        subject_person_id: p_TApWWNZP9pM6Nh9W49PDnW
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1880年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PxLsnDjspkry7PTQ2dVDDR
          claim_id: c_DC9hCqwYG5JLqHWZw9b53e
          source_id: s_DnGLX9hnET2GHRQrdPQkAc
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
        id: c_73v9roKuwr2M44TCWegEFK
        subject_person_id: p_TApWWNZP9pM6Nh9W49PDnW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王繼榖（1852年—1880年），清人物。籍贯會稽，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 69481）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ACAdTYGV5RQcMR6XJ3EvKh
          claim_id: c_73v9roKuwr2M44TCWegEFK
          source_id: s_DnGLX9hnET2GHRQrdPQkAc
          stance: supports
          locator: CBDB:69481
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_xkq5-VmbWWYFn1MtoJbxEO
        subject_person_id: p_ARuFKhVqN78WLimpozGSB7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TApWWNZP9pM6Nh9W49PDnW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qmiWudnemCuw5jY_ux48Ag
          claim_id: c_xkq5-VmbWWYFn1MtoJbxEO
          source_id: s_XoYvadTUpPiCckndXrrSXB
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13193：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_XoYvadTUpPiCckndXrrSXB
            source_type: api_record
            title: 中国历代人物传记资料库：王英瀾（CBDB 527039）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=527039&o=json
            external_identifier: CBDB:527039
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.338Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ARuFKhVqN78WLimpozGSB7
        status: active
        display_name: 王英瀾
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王繼榖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繼榖 | accepted |
| birth.date | 1852年 | accepted |
| death.date | 1880年 | accepted |
| bio.summary | 王繼榖（1852年—1880年），清人物。籍贯會稽，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 69481） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ARuFKhVqN78WLimpozGSB7 | 王英瀾 | accepted |

## 外部来源

- [中国历代人物传记资料库：王繼榖（CBDB 69481）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69481&o=json)
- [中国历代人物传记资料库：王英瀾（CBDB 527039）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=527039&o=json)
