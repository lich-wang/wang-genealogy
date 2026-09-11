---
schema: wang-person/v1
id: p_dz5pKN3QdJuLYsk916jFj6
status: active
merged_into: null
display_name: 王懋仁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SDVSsZQ1DPEixxayNu1Pvx
        subject_person_id: p_dz5pKN3QdJuLYsk916jFj6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懋仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1cB15KLhBLFtKjVqLEdSkU
          claim_id: c_SDVSsZQ1DPEixxayNu1Pvx
          source_id: s_XPNsM3kkS6g9rKojWphXGB
          stance: supports
          locator: CBDB:638009
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638009）
          source: &a1
            id: s_XPNsM3kkS6g9rKojWphXGB
            source_type: api_record
            title: 中国历代人物传记资料库：王懋仁（CBDB 638009）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638009&o=json
            external_identifier: CBDB:638009
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.587Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QtfwQAa7i28qcL2Sgf82T9
        subject_person_id: p_dz5pKN3QdJuLYsk916jFj6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懋仁，清人物。籍贯皋蘭，曾任典史。（中国历代人物传记资料库 CBDB 638009）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_e1i2CdjlpIyzjv1wzkz4HD
          claim_id: c_QtfwQAa7i28qcL2Sgf82T9
          source_id: s_XPNsM3kkS6g9rKojWphXGB
          stance: supports
          locator: CBDB:638009
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

# 王懋仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王懋仁 | accepted |
| bio.summary | 王懋仁，清人物。籍贯皋蘭，曾任典史。（中国历代人物传记资料库 CBDB 638009） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王懋仁（CBDB 638009）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638009&o=json)
