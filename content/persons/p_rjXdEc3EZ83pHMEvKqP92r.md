---
schema: wang-person/v1
id: p_rjXdEc3EZ83pHMEvKqP92r
status: active
merged_into: null
display_name: 王仁善
cbdb_id: 294929
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WRR8AatQXGNAAhDN2s3bKq
        subject_person_id: p_rjXdEc3EZ83pHMEvKqP92r
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁善，明人物。中国历代人物传记资料库（CBDB）以人物编号 294929 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_RUJ_l1O1ZPt2ZG2JeDYxk-
          claim_id: c_WRR8AatQXGNAAhDN2s3bKq
          source_id: s_bfU217RSBLcNGJtuykHGdX
          stance: supports
          locator: CBDB:294929
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_bfU217RSBLcNGJtuykHGdX
            source_type: api_record
            title: 中国历代人物传记资料库：王仁善（CBDB 294929）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294929&o=json
            external_identifier: CBDB:294929
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_cpYPgDVcDUSL31Db6a5kpM
        subject_person_id: p_rjXdEc3EZ83pHMEvKqP92r
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁善
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_WmrLYDcWQH6ckWPdiNrEKn
          claim_id: c_cpYPgDVcDUSL31Db6a5kpM
          source_id: s_bfU217RSBLcNGJtuykHGdX
          stance: supports
          locator: CBDB:294929
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3401-3500）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_bfU217RSBLcNGJtuykHGdX
            source_type: api_record
            title: 中国历代人物传记资料库：王仁善（CBDB 294929）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294929&o=json
            external_identifier: CBDB:294929
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
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
  ancestors: []
  descendants:
    - claim:
        id: c_wARAxpaUlKx7RfX7uQygCD
        subject_person_id: p_rjXdEc3EZ83pHMEvKqP92r
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_uaek5dH7vUvS3w7o2aMbko
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_reYGRLpPCcluPD5hwgzIc9
          claim_id: c_wARAxpaUlKx7RfX7uQygCD
          source_id: s_2ALbcHnh28ruonXPAzF68S
          stance: supports
          locator: 天順元年進士登科錄:一卷，第三甲第四十名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_2ALbcHnh28ruonXPAzF68S
            source_type: api_record
            title: 中国历代人物传记资料库：王存禮（CBDB 198619）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198619&o=json
            external_identifier: CBDB:198619
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.504Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_uaek5dH7vUvS3w7o2aMbko
        status: active
        display_name: 王存禮
        merged_into_person_id: null
  other: []
---

# 王仁善

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王仁善，明人物。中国历代人物传记资料库（CBDB）以人物编号 294929 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王仁善 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_uaek5dH7vUvS3w7o2aMbko | 王存禮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王存禮（CBDB 198619）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198619&o=json)
- [中国历代人物传记资料库：王仁善（CBDB 294929）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294929&o=json)
