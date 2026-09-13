---
schema: wang-person/v1
id: p_2MCcNR2xN2nrBoeM5CGALr
status: active
merged_into: null
display_name: 王麟昭
cbdb_id: 237905
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sR4nQqhngFNfxB9rPs7Ndv
        subject_person_id: p_2MCcNR2xN2nrBoeM5CGALr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王麟昭，明人物。正统七年進士。（中国历代人物传记资料库 CBDB 237905）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_YSi96p-KEaFyoAgNRQMvc7
          claim_id: c_sR4nQqhngFNfxB9rPs7Ndv
          source_id: s_bcQeBUxMyijaphy2TqhpMN
          stance: supports
          locator: CBDB:237905
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_bcQeBUxMyijaphy2TqhpMN
            source_type: api_record
            title: 中国历代人物传记资料库：王麟昭（CBDB 237905）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237905&o=json
            external_identifier: CBDB:237905
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_3TFHbxASU3j6t8DCvB1d66
        subject_person_id: p_2MCcNR2xN2nrBoeM5CGALr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王麟昭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_CfFAneGLdWoZ4WpoNYcjkH
          claim_id: c_3TFHbxASU3j6t8DCvB1d66
          source_id: s_bcQeBUxMyijaphy2TqhpMN
          stance: supports
          locator: CBDB:237905
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2801-2900）｜历史性依据：CBDB 朝代 = 明
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
  descendants:
    - claim:
        id: c_EuBOq_gaGz8fv-m5qJpLXS
        subject_person_id: p_2MCcNR2xN2nrBoeM5CGALr
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_o9Skr37gpNqp5J1Xx81AEF
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G9QcvFPt_MEPNFY9GqlekL
          claim_id: c_EuBOq_gaGz8fv-m5qJpLXS
          source_id: s_bcQeBUxMyijaphy2TqhpMN
          stance: supports
          locator: 正统七年進士登科錄:一卷，第二甲第四十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_bcQeBUxMyijaphy2TqhpMN
            source_type: api_record
            title: 中国历代人物传记资料库：王麟昭（CBDB 237905）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237905&o=json
            external_identifier: CBDB:237905
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_o9Skr37gpNqp5J1Xx81AEF
        status: active
        display_name: 王儼
        merged_into_person_id: null
  other: []
---

# 王麟昭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王麟昭，明人物。正统七年進士。（中国历代人物传记资料库 CBDB 237905） | accepted |
| name.primary | 王麟昭 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_o9Skr37gpNqp5J1Xx81AEF | 王儼 | accepted |

## 外部来源

- [中国历代人物传记资料库：王麟昭（CBDB 237905）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237905&o=json)
