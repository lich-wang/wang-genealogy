---
schema: wang-person/v1
id: p_HfLk9ptSCZD1pXUYCky88S
status: active
merged_into: null
display_name: 王一言
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tA9Ht1o1Vj1KXWJXjTbh9v
        subject_person_id: p_HfLk9ptSCZD1pXUYCky88S
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JnpnM6bVgWuRGUE4Bh9774
          claim_id: c_tA9Ht1o1Vj1KXWJXjTbh9v
          source_id: s_XvtFARKg2ZDosjdmbTHxzK
          stance: supports
          locator: CBDB:206148
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（206148）
          source: &a1
            id: s_XvtFARKg2ZDosjdmbTHxzK
            source_type: api_record
            title: 中国历代人物传记资料库：王一言（CBDB 206148）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206148&o=json
            external_identifier: CBDB:206148
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.886Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4DmWF6xUtsmj8CXa5RMCr3
        subject_person_id: p_HfLk9ptSCZD1pXUYCky88S
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1539年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VP9u3uNNcP4YcfHaNWAHHP
          claim_id: c_4DmWF6xUtsmj8CXa5RMCr3
          source_id: s_XvtFARKg2ZDosjdmbTHxzK
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_u2zSSY6wnbrw96hZwCaWxf
        subject_person_id: p_HfLk9ptSCZD1pXUYCky88S
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一言（生于1539年），明人物。明清進士進士，籍贯南城，入仕進士，曾任府丞、副使、縣令。（中国历代人物传记资料库 CBDB 206148）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TKpxXEjIuKuO1ThBIMluzv
          claim_id: c_u2zSSY6wnbrw96hZwCaWxf
          source_id: s_XvtFARKg2ZDosjdmbTHxzK
          stance: supports
          locator: CBDB:206148
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_wyNqnoYbBIaqm4DY-IcgRb
        subject_person_id: p_w5fXASs4g8AzDQ4NHHrEv7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HfLk9ptSCZD1pXUYCky88S
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GRl7uUuBQCryXGHOEaPExu
          claim_id: c_wyNqnoYbBIaqm4DY-IcgRb
          source_id: s_fFP76qM8mRHfLkqmZSpu9Q
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第八十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_fFP76qM8mRHfLkqmZSpu9Q
            source_type: api_record
            title: 中国历代人物传记资料库：王湧（CBDB 213978）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213978&o=json
            external_identifier: CBDB:213978
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.133Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_w5fXASs4g8AzDQ4NHHrEv7
        status: active
        display_name: 王湧
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_IBNQ9GkhMIcwzoWGtfAQBK
        subject_person_id: p_3AyKgJ9Du3h776Ls9PM57m
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_HfLk9ptSCZD1pXUYCky88S
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8RNLN1wRAZ2-mWDKf1cQse
          claim_id: c_IBNQ9GkhMIcwzoWGtfAQBK
          source_id: s_XKg4VMEwyzCG9qCLPt3Vc3
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第八十四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_XKg4VMEwyzCG9qCLPt3Vc3
            source_type: api_record
            title: 中国历代人物传记资料库：王廉（CBDB 213977）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213977&o=json
            external_identifier: CBDB:213977
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.133Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3AyKgJ9Du3h776Ls9PM57m
        status: active
        display_name: 王廉
        merged_into_person_id: null
    - claim:
        id: c_cQwxV4TvhGEwNKNrQsSydL
        subject_person_id: p_HooaQHi6HT221VAZHQM9oZ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_HfLk9ptSCZD1pXUYCky88S
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CjOmTVmky8zH3Me6DqABUf
          claim_id: c_cQwxV4TvhGEwNKNrQsSydL
          source_id: s_FuTo1YqZGeJBhuKFmzyc4S
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第八十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_FuTo1YqZGeJBhuKFmzyc4S
            source_type: api_record
            title: 中国历代人物传记资料库：王珍（CBDB 213976）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213976&o=json
            external_identifier: CBDB:213976
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.132Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_HooaQHi6HT221VAZHQM9oZ
        status: active
        display_name: 王珍
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王一言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一言 | accepted |
| birth.date | 1539年 | accepted |
| bio.summary | 王一言（生于1539年），明人物。明清進士進士，籍贯南城，入仕進士，曾任府丞、副使、縣令。（中国历代人物传记资料库 CBDB 206148） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_w5fXASs4g8AzDQ4NHHrEv7 | 王湧 | accepted |
| ancestors | p_3AyKgJ9Du3h776Ls9PM57m | 王廉 | accepted |
| ancestors | p_HooaQHi6HT221VAZHQM9oZ | 王珍 | accepted |

## 外部来源

- [中国历代人物传记资料库：王廉（CBDB 213977）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213977&o=json)
- [中国历代人物传记资料库：王一言（CBDB 206148）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206148&o=json)
- [中国历代人物传记资料库：王湧（CBDB 213978）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213978&o=json)
- [中国历代人物传记资料库：王珍（CBDB 213976）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213976&o=json)
