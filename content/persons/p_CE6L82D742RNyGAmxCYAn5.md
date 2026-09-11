---
schema: wang-person/v1
id: p_CE6L82D742RNyGAmxCYAn5
status: active
merged_into: null
display_name: 王三陽
cbdb_id: 206708
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1iAB8pX7wTxD9QXCeMw6Y1
        subject_person_id: p_CE6L82D742RNyGAmxCYAn5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三陽（生于1550年），明人物。中国历代人物传记资料库（CBDB）以人物编号 206708 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_HJtnWz4r2n923tFtoCNLZd
          claim_id: c_1iAB8pX7wTxD9QXCeMw6Y1
          source_id: s_oJ9DpvgfJA2Q12P1wHjea9
          stance: supports
          locator: CBDB:206708
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_oJ9DpvgfJA2Q12P1wHjea9
            source_type: api_record
            title: 中国历代人物传记资料库：王三陽（CBDB 206708）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206708&o=json
            external_identifier: CBDB:206708
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_1JLuqZq4Q7J9dAvH7jo7AK
        subject_person_id: p_CE6L82D742RNyGAmxCYAn5
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1550年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1550-01-01
            latest: 1550-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_AZks54VPUvYdCM1VrjDKqv
          claim_id: c_1JLuqZq4Q7J9dAvH7jo7AK
          source_id: s_oJ9DpvgfJA2Q12P1wHjea9
          stance: supports
          locator: CBDB:206708
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1550
          source:
            id: s_oJ9DpvgfJA2Q12P1wHjea9
            source_type: api_record
            title: 中国历代人物传记资料库：王三陽（CBDB 206708）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206708&o=json
            external_identifier: CBDB:206708
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_KEbuD7bYK7HLJJvLEWej1w
        subject_person_id: p_CE6L82D742RNyGAmxCYAn5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三陽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_rXDnXM4p8LZysFJg7GGNpL
          claim_id: c_KEbuD7bYK7HLJJvLEWej1w
          source_id: s_oJ9DpvgfJA2Q12P1wHjea9
          stance: supports
          locator: CBDB:206708
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1550
          source:
            id: s_oJ9DpvgfJA2Q12P1wHjea9
            source_type: api_record
            title: 中国历代人物传记资料库：王三陽（CBDB 206708）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206708&o=json
            external_identifier: CBDB:206708
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_R-5hp6QtAMSZH3OWZrkPCy
        subject_person_id: p_Eadd6mMaXChvMX3qCq7Z3P
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_CE6L82D742RNyGAmxCYAn5
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IWKvfoSg8orieM3ld-3Xpq
          claim_id: c_R-5hp6QtAMSZH3OWZrkPCy
          source_id: s_DSRV9jMjzb3raA6Jv7LWVW
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第二百二十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DSRV9jMjzb3raA6Jv7LWVW
            source_type: api_record
            title: 中国历代人物传记资料库：王寬（CBDB 221863）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221863&o=json
            external_identifier: CBDB:221863
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.345Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Eadd6mMaXChvMX3qCq7Z3P
        status: active
        display_name: 王寬
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王三陽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王三陽（生于1550年），明人物。中国历代人物传记资料库（CBDB）以人物编号 206708 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| birth.date | 1550年 | accepted |
| name.primary | 王三陽 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_Eadd6mMaXChvMX3qCq7Z3P | 王寬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王寬（CBDB 221863）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221863&o=json)
- [中国历代人物传记资料库：王三陽（CBDB 206708）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206708&o=json)
