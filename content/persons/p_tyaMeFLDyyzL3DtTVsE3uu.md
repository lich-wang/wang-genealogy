---
schema: wang-person/v1
id: p_tyaMeFLDyyzL3DtTVsE3uu
status: merged
merged_into: p_dzQsozLMz4kdNcHPqJVsZP
display_name: 王旦
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_p3VJLY5yn61vBfqLbfYzCf
        subject_person_id: p_tyaMeFLDyyzL3DtTVsE3uu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王旦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dsTJPL6SmkjoQMo3HnKt9f
          claim_id: c_p3VJLY5yn61vBfqLbfYzCf
          source_id: s_24cm7qN9caWD3DSVEucPeJ
          stance: supports
          locator: CBDB:8153
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（8153）
          source: &a1
            id: s_24cm7qN9caWD3DSVEucPeJ
            source_type: api_record
            title: 中国历代人物传记资料库：王旦（CBDB 8153）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=8153&o=json
            external_identifier: CBDB:8153
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.499Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_C5KXmivVK6CGRB2PHaUFjF
        subject_person_id: p_tyaMeFLDyyzL3DtTVsE3uu
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 957年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LKeLJ63Yv7XnFQ8QUrgAJ1
          claim_id: c_C5KXmivVK6CGRB2PHaUFjF
          source_id: s_24cm7qN9caWD3DSVEucPeJ
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
        id: c_6mqekceGSudnWZZ1ACsnS9
        subject_person_id: p_tyaMeFLDyyzL3DtTVsE3uu
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1017年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4YptVMY8dmd5BtJMEggUyZ
          claim_id: c_6mqekceGSudnWZZ1ACsnS9
          source_id: s_24cm7qN9caWD3DSVEucPeJ
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
        id: c_BXGQ41FY4x8tF5jjdFAv2U
        subject_person_id: p_tyaMeFLDyyzL3DtTVsE3uu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王旦（957年—1017年），宋人物。籍贯開封，身份为史學家，入仕進士，曾任尚書省工部尚書、尚書省工部侍郎、知樞密院事。（中国历代人物传记资料库 CBDB 8153）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1uPpDKJASl-BTaBTCaJaV3
          claim_id: c_BXGQ41FY4x8tF5jjdFAv2U
          source_id: s_24cm7qN9caWD3DSVEucPeJ
          stance: supports
          locator: CBDB:8153
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

# 王旦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王旦 | accepted |
| birth.date | 957年 | accepted |
| death.date | 1017年 | accepted |
| bio.summary | 王旦（957年—1017年），宋人物。籍贯開封，身份为史學家，入仕進士，曾任尚書省工部尚書、尚書省工部侍郎、知樞密院事。（中国历代人物传记资料库 CBDB 8153） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王旦（CBDB 8153）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=8153&o=json)
