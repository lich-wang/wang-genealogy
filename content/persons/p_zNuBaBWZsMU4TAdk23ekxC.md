---
schema: wang-person/v1
id: p_zNuBaBWZsMU4TAdk23ekxC
status: active
merged_into: null
display_name: 王仲肅
cbdb_id: 337155
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_D2LFSHwicC59pUdB22Z16T
        subject_person_id: p_zNuBaBWZsMU4TAdk23ekxC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲肅，明人物。中国历代人物传记资料库（CBDB）以人物编号 337155 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_vmka7W7hI29XYwJqZPxb5C
          claim_id: c_D2LFSHwicC59pUdB22Z16T
          source_id: s_zbjJADNUY91WWLYTDNZK58
          stance: supports
          locator: CBDB:337155
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_zbjJADNUY91WWLYTDNZK58
            source_type: api_record
            title: 中国历代人物传记资料库：王仲肅（CBDB 337155）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337155&o=json
            external_identifier: CBDB:337155
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:08.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_wXHfERN9cKKFb5YMeQeUg5
        subject_person_id: p_zNuBaBWZsMU4TAdk23ekxC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲肅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_yUcBy9dgHQWKJf9fe8MdRj
          claim_id: c_wXHfERN9cKKFb5YMeQeUg5
          source_id: s_zbjJADNUY91WWLYTDNZK58
          stance: supports
          locator: CBDB:337155
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4001-4100）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_zbjJADNUY91WWLYTDNZK58
            source_type: api_record
            title: 中国历代人物传记资料库：王仲肅（CBDB 337155）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337155&o=json
            external_identifier: CBDB:337155
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:08.348Z
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
        id: c_yI5rB_JVQUSpSECVOItafL
        subject_person_id: p_zNuBaBWZsMU4TAdk23ekxC
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_BMNf3Y1e3GX9M1tCr78uZv
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OsQWaETE72cKaXz_vQY6oC
          claim_id: c_yI5rB_JVQUSpSECVOItafL
          source_id: s_zmrfFWfwmHqZxrRkgGutK1
          stance: supports
          locator: 天順八年進士登科錄:一卷，第三甲第五十五名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_zmrfFWfwmHqZxrRkgGutK1
            source_type: api_record
            title: 中国历代人物传记资料库：王臣（CBDB 126514）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126514&o=json
            external_identifier: CBDB:126514
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.993Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BMNf3Y1e3GX9M1tCr78uZv
        status: active
        display_name: 王臣
        merged_into_person_id: null
  other: []
---

# 王仲肅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王仲肅，明人物。中国历代人物传记资料库（CBDB）以人物编号 337155 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王仲肅 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_BMNf3Y1e3GX9M1tCr78uZv | 王臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王臣（CBDB 126514）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126514&o=json)
- [中国历代人物传记资料库：王仲肅（CBDB 337155）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337155&o=json)
