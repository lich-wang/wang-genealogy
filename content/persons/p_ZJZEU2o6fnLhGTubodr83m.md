---
schema: wang-person/v1
id: p_ZJZEU2o6fnLhGTubodr83m
status: active
merged_into: null
display_name: 王璉
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cA1f4HQeiGS3gxqAGoJd9Z
        subject_person_id: p_ZJZEU2o6fnLhGTubodr83m
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9xf13LGSWSFakWfj6CVxYR
          claim_id: c_cA1f4HQeiGS3gxqAGoJd9Z
          source_id: s_XuJm4dnGVC1eqrJ3fu3gFL
          stance: supports
          locator: CBDB:260162
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（260162）
          source: &a1
            id: s_XuJm4dnGVC1eqrJ3fu3gFL
            source_type: api_record
            title: 中国历代人物传记资料库：王璉（CBDB 260162）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260162&o=json
            external_identifier: CBDB:260162
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.483Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KQTrqEqy1SPGS89CmM17vd
        subject_person_id: p_ZJZEU2o6fnLhGTubodr83m
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璉，明人物。成化二十三年進士。（中国历代人物传记资料库 CBDB 260162）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DJMWidiqbInA2Ku3W2l0W3
          claim_id: c_KQTrqEqy1SPGS89CmM17vd
          source_id: s_XuJm4dnGVC1eqrJ3fu3gFL
          stance: supports
          locator: CBDB:260162
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
        id: c_BFgFaxrvXymJwmAJsKP3Y4
        subject_person_id: p_ZJZEU2o6fnLhGTubodr83m
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Y8c9Xt6HZtEueH7Ywuv2af
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SbyjYJ0pLe1z1CSV_dVHw_
          claim_id: c_BFgFaxrvXymJwmAJsKP3Y4
          source_id: s_XuJm4dnGVC1eqrJ3fu3gFL
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第一百六十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Y8c9Xt6HZtEueH7Ywuv2af
        status: active
        display_name: 王啟
        merged_into_person_id: null
  other: []
---

# 王璉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璉 | accepted |
| bio.summary | 王璉，明人物。成化二十三年進士。（中国历代人物传记资料库 CBDB 260162） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_Y8c9Xt6HZtEueH7Ywuv2af | 王啟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璉（CBDB 260162）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260162&o=json)
