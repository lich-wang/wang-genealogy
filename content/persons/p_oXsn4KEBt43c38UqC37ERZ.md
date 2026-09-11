---
schema: wang-person/v1
id: p_oXsn4KEBt43c38UqC37ERZ
status: active
merged_into: null
display_name: 王啟仁
cbdb_id: 517397
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_f4HGWNLgBX7nhxjUavxQqd
        subject_person_id: p_oXsn4KEBt43c38UqC37ERZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王啟仁，清人物。中国历代人物传记资料库（CBDB）以人物编号 517397 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_D8eem9ur7nUsLjdhOMoS4k
          claim_id: c_f4HGWNLgBX7nhxjUavxQqd
          source_id: s_5XqKiSuN7Tokv1grNenVAJ
          stance: supports
          locator: CBDB:517397
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_5XqKiSuN7Tokv1grNenVAJ
            source_type: api_record
            title: 中国历代人物传记资料库：王啟仁（CBDB 517397）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=517397&o=json
            external_identifier: CBDB:517397
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:16.852Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_x5hhR6FsygoeWP6wynrPhy
        subject_person_id: p_oXsn4KEBt43c38UqC37ERZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王啟仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_f2B5EyMFaFARUqj8N1XKh6
          claim_id: c_x5hhR6FsygoeWP6wynrPhy
          source_id: s_5XqKiSuN7Tokv1grNenVAJ
          stance: supports
          locator: CBDB:517397
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6901-7000）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_5XqKiSuN7Tokv1grNenVAJ
            source_type: api_record
            title: 中国历代人物传记资料库：王啟仁（CBDB 517397）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=517397&o=json
            external_identifier: CBDB:517397
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:16.852Z
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
        id: c_T1I4XxhEbPkn_Jp01voKR4
        subject_person_id: p_oXsn4KEBt43c38UqC37ERZ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_cBGCXtQ6wkhv554viPc99n
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VxItaDcjWhuhr_XPviWv9e
          claim_id: c_T1I4XxhEbPkn_Jp01voKR4
          source_id: s_szZBgRZFUof6ECVtLRNSze
          stance: supports
          locator: (道光)徽州府志:十六卷卷首一卷，lgid=1160984：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_szZBgRZFUof6ECVtLRNSze
            source_type: api_record
            title: 中国历代人物传记资料库：王文德（CBDB 696857）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696857&o=json
            external_identifier: CBDB:696857
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.702Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_cBGCXtQ6wkhv554viPc99n
        status: active
        display_name: 王文德
        merged_into_person_id: null
  other: []
---

# 王啟仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王啟仁，清人物。中国历代人物传记资料库（CBDB）以人物编号 517397 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王啟仁 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_cBGCXtQ6wkhv554viPc99n | 王文德 | accepted |

## 外部来源

- [中国历代人物传记资料库：王啟仁（CBDB 517397）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=517397&o=json)
- [中国历代人物传记资料库：王文德（CBDB 696857）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696857&o=json)
