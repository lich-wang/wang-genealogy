---
schema: wang-person/v1
id: p_Hw84PGDw596PV1b4C19Ya8
status: active
merged_into: null
display_name: 王翊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vLZcvZZHAiwQrPB2ZbLHHK
        subject_person_id: p_Hw84PGDw596PV1b4C19Ya8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aVsHbMmNQ4D8YyaoyWw71U
          claim_id: c_vLZcvZZHAiwQrPB2ZbLHHK
          source_id: s_FDReJ4dF6xCiWGXQVpJcAW
          stance: supports
          locator: CBDB:37971
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37971）
          source: &a1
            id: s_FDReJ4dF6xCiWGXQVpJcAW
            source_type: api_record
            title: 中国历代人物传记资料库：王翊（CBDB 37971）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37971&o=json
            external_identifier: CBDB:37971
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.305Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_8xtt7ALmcdKN63YDBGH4Ev
        subject_person_id: p_Hw84PGDw596PV1b4C19Ya8
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 993年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n7PCycHV2hzcF84jyoJXcC
          claim_id: c_8xtt7ALmcdKN63YDBGH4Ev
          source_id: s_FDReJ4dF6xCiWGXQVpJcAW
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
        id: c_RQvb14AMZP8SapSKCZtrBz
        subject_person_id: p_Hw84PGDw596PV1b4C19Ya8
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1053年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q7LXBiXwQ16XQ3PK7kZDs9
          claim_id: c_RQvb14AMZP8SapSKCZtrBz
          source_id: s_FDReJ4dF6xCiWGXQVpJcAW
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
        id: c_CsSn4VFiUDhDrsCYvhLcCs
        subject_person_id: p_Hw84PGDw596PV1b4C19Ya8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翊（993年—1053年），宋人物。籍贯開封，入仕書藝補官，曾任尚書左僕射、司理參軍、縣尉。（中国历代人物传记资料库 CBDB 37971）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FQka2Z-ZGIT3kGfZGuDec8
          claim_id: c_CsSn4VFiUDhDrsCYvhLcCs
          source_id: s_FDReJ4dF6xCiWGXQVpJcAW
          stance: supports
          locator: CBDB:37971
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

# 王翊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王翊 | accepted |
| birth.date | 993年 | accepted |
| death.date | 1053年 | accepted |
| bio.summary | 王翊（993年—1053年），宋人物。籍贯開封，入仕書藝補官，曾任尚書左僕射、司理參軍、縣尉。（中国历代人物传记资料库 CBDB 37971） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王翊（CBDB 37971）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37971&o=json)
