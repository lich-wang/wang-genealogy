---
schema: wang-person/v1
id: p_eSAMJxeFXaqnK1yWfAKdFJ
status: active
merged_into: null
display_name: 王景銘
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_APERnCijaG6P3qX3PwW1uA
        subject_person_id: p_eSAMJxeFXaqnK1yWfAKdFJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景銘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EYW3AoGaonE291Bi7p26pm
          claim_id: c_APERnCijaG6P3qX3PwW1uA
          source_id: s_HA26jyGcz1iSaNCzcar8En
          stance: supports
          locator: CBDB:241838
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（241838）
          source: &a1
            id: s_HA26jyGcz1iSaNCzcar8En
            source_type: api_record
            title: 中国历代人物传记资料库：王景銘（CBDB 241838）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241838&o=json
            external_identifier: CBDB:241838
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.956Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XEZwJAwYSF5ytFA5fFsJvs
        subject_person_id: p_eSAMJxeFXaqnK1yWfAKdFJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景銘，明人物。成化二年進士。（中国历代人物传记资料库 CBDB 241838）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gHF_5UmjoHGhNPX1FAWvlq
          claim_id: c_XEZwJAwYSF5ytFA5fFsJvs
          source_id: s_HA26jyGcz1iSaNCzcar8En
          stance: supports
          locator: CBDB:241838
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
        id: c_PqTNR1fqgYfM4E_KHPOyP6
        subject_person_id: p_eSAMJxeFXaqnK1yWfAKdFJ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_7a2QWukYSmEM9zh4AA1o47
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_d_NtcGBM4TrU4d95-QNK0f
          claim_id: c_PqTNR1fqgYfM4E_KHPOyP6
          source_id: s_HA26jyGcz1iSaNCzcar8En
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第一百七十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_7a2QWukYSmEM9zh4AA1o47
        status: active
        display_name: 王得孚
        merged_into_person_id: null
  other: []
---

# 王景銘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景銘 | accepted |
| bio.summary | 王景銘，明人物。成化二年進士。（中国历代人物传记资料库 CBDB 241838） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_7a2QWukYSmEM9zh4AA1o47 | 王得孚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王景銘（CBDB 241838）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241838&o=json)
