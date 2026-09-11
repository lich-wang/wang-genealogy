---
schema: wang-person/v1
id: p_HCMAMT8CTiw3Deh3tH1CVK
status: active
merged_into: null
display_name: 王懋官
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hLat2QJtJwPnjt2FBS2c58
        subject_person_id: p_HCMAMT8CTiw3Deh3tH1CVK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懋官
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aV9XEwghWwknRg2riW1He3
          claim_id: c_hLat2QJtJwPnjt2FBS2c58
          source_id: s_KF58JkyoB2dKkbFFZknD41
          stance: supports
          locator: CBDB:72215
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72215）
          source: &a1
            id: s_KF58JkyoB2dKkbFFZknD41
            source_type: api_record
            title: 中国历代人物传记资料库：王懋官（CBDB 72215）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72215&o=json
            external_identifier: CBDB:72215
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.053Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ZmjwjSJRkZaYSzqPF14Xd3
        subject_person_id: p_HCMAMT8CTiw3Deh3tH1CVK
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1847年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8YTXZgWjdkNrLTs2c3u4Uk
          claim_id: c_ZmjwjSJRkZaYSzqPF14Xd3
          source_id: s_KF58JkyoB2dKkbFFZknD41
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
        id: c_yxR8DSvwuZozaUNrt2yw3m
        subject_person_id: p_HCMAMT8CTiw3Deh3tH1CVK
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1917年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s11kGjAAAPKAibQ3xJCAUE
          claim_id: c_yxR8DSvwuZozaUNrt2yw3m
          source_id: s_KF58JkyoB2dKkbFFZknD41
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
        id: c_swRAWEwmSde51nhXAzu52x
        subject_person_id: p_HCMAMT8CTiw3Deh3tH1CVK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懋官（1847年—1917年），中華民國人物。籍贯揚州府。（中国历代人物传记资料库 CBDB 72215）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_HsjyZi5HW-M5Il6ov1iKij
          claim_id: c_swRAWEwmSde51nhXAzu52x
          source_id: s_KF58JkyoB2dKkbFFZknD41
          stance: supports
          locator: CBDB:72215
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

# 王懋官

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王懋官 | accepted |
| birth.date | 1847年 | accepted |
| death.date | 1917年 | accepted |
| bio.summary | 王懋官（1847年—1917年），中華民國人物。籍贯揚州府。（中国历代人物传记资料库 CBDB 72215） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王懋官（CBDB 72215）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72215&o=json)
