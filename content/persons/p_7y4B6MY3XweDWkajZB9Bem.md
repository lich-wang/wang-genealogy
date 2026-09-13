---
schema: wang-person/v1
id: p_7y4B6MY3XweDWkajZB9Bem
status: active
merged_into: null
display_name: 王開甲
cbdb_id: 61906
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EUNj1BkD4nyZBvy1wpqEHP
        subject_person_id: p_7y4B6MY3XweDWkajZB9Bem
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王開甲（生于1837年），清人物。明清進士進士，籍贯富順，入仕進士。（中国历代人物传记资料库 CBDB 61906）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_za2oog9_iT6n-1rHsRhgD4
          claim_id: c_EUNj1BkD4nyZBvy1wpqEHP
          source_id: s_pRC4Cy1JuxD7VJ6S4sJaqF
          stance: supports
          locator: CBDB:61906
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_pRC4Cy1JuxD7VJ6S4sJaqF
            source_type: api_record
            title: 中国历代人物传记资料库：王開甲（CBDB 61906）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61906&o=json
            external_identifier: CBDB:61906
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:41.297Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_M3WK8tifGJEkx6i7gomQWs
        subject_person_id: p_7y4B6MY3XweDWkajZB9Bem
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1837年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1837-01-01
            latest: 1837-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gN25umTmuQ4EQxQGq6w91n
          claim_id: c_M3WK8tifGJEkx6i7gomQWs
          source_id: s_pRC4Cy1JuxD7VJ6S4sJaqF
          stance: supports
          locator: CBDB:61906
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（601-700）｜历史性依据：CBDB 生年 = 1837
          source:
            id: s_pRC4Cy1JuxD7VJ6S4sJaqF
            source_type: api_record
            title: 中国历代人物传记资料库：王開甲（CBDB 61906）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61906&o=json
            external_identifier: CBDB:61906
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:41.297Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_bqU57qbezi8ADpnngyuByr
        subject_person_id: p_7y4B6MY3XweDWkajZB9Bem
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王開甲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Y4oF5H75ewZ5fFLCxFWRDp
          claim_id: c_bqU57qbezi8ADpnngyuByr
          source_id: s_pRC4Cy1JuxD7VJ6S4sJaqF
          stance: supports
          locator: CBDB:61906
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（601-700）｜历史性依据：CBDB 生年 = 1837
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

# 王開甲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王開甲（生于1837年），清人物。明清進士進士，籍贯富順，入仕進士。（中国历代人物传记资料库 CBDB 61906） | accepted |
| birth.date | 1837年 | accepted |
| name.primary | 王開甲 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王開甲（CBDB 61906）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61906&o=json)
