---
schema: wang-person/v1
id: p_JbZbb7bSEAuQ6oSa93UNDg
status: active
merged_into: null
display_name: 王桷
cbdb_id: 23857
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ufu5K1dPUYPttu9HCsG31n
        subject_person_id: p_JbZbb7bSEAuQ6oSa93UNDg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王桷（生于1110年），宋人物。中国历代人物传记资料库（CBDB）以人物编号 23857 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_mCz7gne5CyF9TMWjdJEOqr
          claim_id: c_ufu5K1dPUYPttu9HCsG31n
          source_id: s_577xwFrkciZBGFM2XPZpfz
          stance: supports
          locator: CBDB:23857
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_577xwFrkciZBGFM2XPZpfz
            source_type: api_record
            title: 中国历代人物传记资料库：王桷（CBDB 23857）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23857&o=json
            external_identifier: CBDB:23857
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:41.297Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Gu3zt5BmkEoDmbMixyV39R
        subject_person_id: p_JbZbb7bSEAuQ6oSa93UNDg
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1110年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1110-01-01
            latest: 1110-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1Hgom5PHifkpBvQh7LXDvN
          claim_id: c_Gu3zt5BmkEoDmbMixyV39R
          source_id: s_577xwFrkciZBGFM2XPZpfz
          stance: supports
          locator: CBDB:23857
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（601-700）｜历史性依据：CBDB 生年 = 1110
          source:
            id: s_577xwFrkciZBGFM2XPZpfz
            source_type: api_record
            title: 中国历代人物传记资料库：王桷（CBDB 23857）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23857&o=json
            external_identifier: CBDB:23857
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:41.297Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_dAJhbvM65Rr7JMpN4w617a
        subject_person_id: p_JbZbb7bSEAuQ6oSa93UNDg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王桷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_1sizMENKr5to118FUp55So
          claim_id: c_dAJhbvM65Rr7JMpN4w617a
          source_id: s_577xwFrkciZBGFM2XPZpfz
          stance: supports
          locator: CBDB:23857
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（601-700）｜历史性依据：CBDB 生年 = 1110
          source:
            id: s_577xwFrkciZBGFM2XPZpfz
            source_type: api_record
            title: 中国历代人物传记资料库：王桷（CBDB 23857）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23857&o=json
            external_identifier: CBDB:23857
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:41.297Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_UTNAFwENmWizUWxJ_DSvnz
        subject_person_id: p_GJ9SRZsWG54UstgKZuLq2G
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JbZbb7bSEAuQ6oSa93UNDg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BG1oug0v06YnNncULI7Wtw
          claim_id: c_UTNAFwENmWizUWxJ_DSvnz
          source_id: s_oKEjKvqvAhjDu9meNCUBTa
          stance: supports
          locator: CBDB 双向互证（子 王桷 ⇄ 父 王涇）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_oKEjKvqvAhjDu9meNCUBTa
            source_type: api_record
            title: 中国历代人物传记资料库：王涇（CBDB 23856）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23856&o=json
            external_identifier: CBDB:23856
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.891Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GJ9SRZsWG54UstgKZuLq2G
        status: active
        display_name: 王涇
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王桷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王桷（生于1110年），宋人物。中国历代人物传记资料库（CBDB）以人物编号 23857 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| birth.date | 1110年 | accepted |
| name.primary | 王桷 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_GJ9SRZsWG54UstgKZuLq2G | 王涇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王涇（CBDB 23856）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23856&o=json)
- [中国历代人物传记资料库：王桷（CBDB 23857）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23857&o=json)
