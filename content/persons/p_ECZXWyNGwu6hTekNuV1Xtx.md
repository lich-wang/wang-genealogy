---
schema: wang-person/v1
id: p_ECZXWyNGwu6hTekNuV1Xtx
status: active
merged_into: null
display_name: 王建常
cbdb_id: 69299
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_M1AkNbT5BZEBLnqsWGMBTw
        subject_person_id: p_ECZXWyNGwu6hTekNuV1Xtx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王建常（生于1615年），清人物。籍贯朝邑，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 69299）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_sEtXQFFgWhm0mHwkw8iKZz
          claim_id: c_M1AkNbT5BZEBLnqsWGMBTw
          source_id: s_74FtdooHxdc7FVjxfU9s22
          stance: supports
          locator: CBDB:69299
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_74FtdooHxdc7FVjxfU9s22
            source_type: api_record
            title: 中国历代人物传记资料库：王建常（CBDB 69299）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69299&o=json
            external_identifier: CBDB:69299
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:41.297Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_5cVNtSBR3nLDYJf4224bRx
        subject_person_id: p_ECZXWyNGwu6hTekNuV1Xtx
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1615年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1615-01-01
            latest: 1615-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_36GbJ1tgEeGvS4DfNxx8kz
          claim_id: c_5cVNtSBR3nLDYJf4224bRx
          source_id: s_74FtdooHxdc7FVjxfU9s22
          stance: supports
          locator: CBDB:69299
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（601-700）｜历史性依据：CBDB 生年 = 1615
          source:
            id: s_74FtdooHxdc7FVjxfU9s22
            source_type: api_record
            title: 中国历代人物传记资料库：王建常（CBDB 69299）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69299&o=json
            external_identifier: CBDB:69299
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:41.297Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_6D1bjLNPfBq4DU8yfrSAdz
        subject_person_id: p_ECZXWyNGwu6hTekNuV1Xtx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王建常
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_2fdgYVAQz8GZX7oK3ubnBV
          claim_id: c_6D1bjLNPfBq4DU8yfrSAdz
          source_id: s_74FtdooHxdc7FVjxfU9s22
          stance: supports
          locator: CBDB:69299
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（601-700）｜历史性依据：CBDB 生年 = 1615
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

# 王建常

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王建常（生于1615年），清人物。籍贯朝邑，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 69299） | accepted |
| birth.date | 1615年 | accepted |
| name.primary | 王建常 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王建常（CBDB 69299）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69299&o=json)
