---
schema: wang-person/v1
id: p_SGxowFRyQGSdRaJeuGGNko
status: active
merged_into: null
display_name: 王磵松
cbdb_id: 56666
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cPyBQUWG9C5zq5F2hqc6zJ
        subject_person_id: p_SGxowFRyQGSdRaJeuGGNko
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王磵松，清人物。中国历代人物传记资料库（CBDB）以人物编号 56666 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_5uWvJCCiVWLnjDLkOjYPkl
          claim_id: c_cPyBQUWG9C5zq5F2hqc6zJ
          source_id: s_N6fqsFn2LgPcPoMPAWCYSp
          stance: supports
          locator: CBDB:56666
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_N6fqsFn2LgPcPoMPAWCYSp
            source_type: api_record
            title: 中国历代人物传记资料库：王磵松（CBDB 56666）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56666&o=json
            external_identifier: CBDB:56666
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:48.148Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_q7FEZujErc7JF7rPWN4Dcr
        subject_person_id: p_SGxowFRyQGSdRaJeuGGNko
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王磵松
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_9LoYbbpERcEE49ZTXZqxDH
          claim_id: c_q7FEZujErc7JF7rPWN4Dcr
          source_id: s_N6fqsFn2LgPcPoMPAWCYSp
          stance: supports
          locator: CBDB:56666
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1401-1500）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_N6fqsFn2LgPcPoMPAWCYSp
            source_type: api_record
            title: 中国历代人物传记资料库：王磵松（CBDB 56666）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56666&o=json
            external_identifier: CBDB:56666
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:48.148Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_BXwqH7jr-PicEHWC5E5LaO
        subject_person_id: p_SGxowFRyQGSdRaJeuGGNko
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Q2BUzEFPEcUPwCvzvG5JVv
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XJ5PAd3SVuMJoSNYZ7ZfW5
          claim_id: c_BXwqH7jr-PicEHWC5E5LaO
          source_id: s_OgANLKD6kpX8Oi5BdDvkAM
          stance: supports
          locator: CBDB 双向互证（妻子 郭瑛）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_OgANLKD6kpX8Oi5BdDvkAM
            source_type: api_record
            title: 中国历代人物传记资料库：郭瑛（CBDB 56664）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56664&o=json
            external_identifier: CBDB:56664
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Q2BUzEFPEcUPwCvzvG5JVv
        status: active
        display_name: 郭瑛
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王磵松

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王磵松，清人物。中国历代人物传记资料库（CBDB）以人物编号 56666 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王磵松 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_Q2BUzEFPEcUPwCvzvG5JVv | 郭瑛 | accepted |

## 外部来源

- [中国历代人物传记资料库：郭瑛（CBDB 56664）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56664&o=json)
- [中国历代人物传记资料库：王磵松（CBDB 56666）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56666&o=json)
