---
schema: wang-person/v1
id: p_9PcP1eVw2Xs1K2J2cm2szS
status: active
merged_into: null
display_name: 王堯日
cbdb_id: 126715
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_q7CEcFHuCr9yNmeNXg9vL4
        subject_person_id: p_9PcP1eVw2Xs1K2J2cm2szS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堯日，明人物。中国历代人物传记资料库（CBDB）以人物编号 126715 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_NZK5Dda93LnLg5T9igobYm
          claim_id: c_q7CEcFHuCr9yNmeNXg9vL4
          source_id: s_rwsktfJxGf6xMQQTDf9V45
          stance: supports
          locator: CBDB:126715
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_rwsktfJxGf6xMQQTDf9V45
            source_type: api_record
            title: 中国历代人物传记资料库：王堯日（CBDB 126715）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126715&o=json
            external_identifier: CBDB:126715
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_5ui3TZYv4oMaDnPJMdZspf
        subject_person_id: p_9PcP1eVw2Xs1K2J2cm2szS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堯日
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_7oomgrLD3mcfEqMbzHbVuX
          claim_id: c_5ui3TZYv4oMaDnPJMdZspf
          source_id: s_rwsktfJxGf6xMQQTDf9V45
          stance: supports
          locator: CBDB:126715
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2001-2100）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_rwsktfJxGf6xMQQTDf9V45
            source_type: api_record
            title: 中国历代人物传记资料库：王堯日（CBDB 126715）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126715&o=json
            external_identifier: CBDB:126715
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
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
        id: c_LGK8kYtLH9s0xlOiiPAaAG
        subject_person_id: p_ETa8uEUn9yz81JQ8eP8GPX
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_9PcP1eVw2Xs1K2J2cm2szS
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VPfk1gsF7eL3ZeQxTlxe4D
          claim_id: c_LGK8kYtLH9s0xlOiiPAaAG
          source_id: s_55np26azUV2QxQy6R4V2oZ
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第三甲第二百零六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_55np26azUV2QxQy6R4V2oZ
            source_type: api_record
            title: 中国历代人物传记资料库：王紀（CBDB 301843）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301843&o=json
            external_identifier: CBDB:301843
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.639Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ETa8uEUn9yz81JQ8eP8GPX
        status: active
        display_name: 王紀
        merged_into_person_id: null
    - claim:
        id: c_LjFTvoe4EbNptC_FPgydQO
        subject_person_id: p_fNy995UU23sXA3mHLNxwHr
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_9PcP1eVw2Xs1K2J2cm2szS
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wv38QVnqy5THedIOtAraN1
          claim_id: c_LjFTvoe4EbNptC_FPgydQO
          source_id: s_ow16wbKimaQ6xpMhu3g9aK
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第三甲第二百零六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ow16wbKimaQ6xpMhu3g9aK
            source_type: api_record
            title: 中国历代人物传记资料库：王智（CBDB 301842）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301842&o=json
            external_identifier: CBDB:301842
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.639Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fNy995UU23sXA3mHLNxwHr
        status: active
        display_name: 王智
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王堯日

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王堯日，明人物。中国历代人物传记资料库（CBDB）以人物编号 126715 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王堯日 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_ETa8uEUn9yz81JQ8eP8GPX | 王紀 | accepted |
| ancestors | p_fNy995UU23sXA3mHLNxwHr | 王智 | accepted |

## 外部来源

- [中国历代人物传记资料库：王紀（CBDB 301843）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301843&o=json)
- [中国历代人物传记资料库：王堯日（CBDB 126715）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126715&o=json)
- [中国历代人物传记资料库：王智（CBDB 301842）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301842&o=json)
