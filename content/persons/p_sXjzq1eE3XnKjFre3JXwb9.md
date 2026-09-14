---
schema: wang-person/v1
id: p_sXjzq1eE3XnKjFre3JXwb9
status: active
merged_into: null
display_name: 王法祖
cbdb_id: 334092
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LNi5NXHw3fWXQmHUBxXXBu
        subject_person_id: p_sXjzq1eE3XnKjFre3JXwb9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王法祖，明人物。隆慶二年進士，籍贯南陽。（中国历代人物传记资料库 CBDB 334092）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_J-qg9UESNsEs2MQlM1FljI
          claim_id: c_LNi5NXHw3fWXQmHUBxXXBu
          source_id: s_S3jKLv6gur8wRTvWBy4Hh4
          stance: supports
          locator: CBDB:334092
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_S3jKLv6gur8wRTvWBy4Hh4
            source_type: api_record
            title: 中国历代人物传记资料库：王法祖（CBDB 334092）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334092&o=json
            external_identifier: CBDB:334092
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:07.614Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_JsK6uXYYwULsxv7oL3378F
        subject_person_id: p_sXjzq1eE3XnKjFre3JXwb9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王法祖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_77MK4CqGX6PzmNPAikN18v
          claim_id: c_JsK6uXYYwULsxv7oL3378F
          source_id: s_S3jKLv6gur8wRTvWBy4Hh4
          stance: supports
          locator: CBDB:334092
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3901-4000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_gJkn_PNadsFu1Lqt-GUOCR
        subject_person_id: p_51Pca5wdng4NB9T2FpYuFX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sXjzq1eE3XnKjFre3JXwb9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3LtIMIOLIosDqP8hENpslG
          claim_id: c_gJkn_PNadsFu1Lqt-GUOCR
          source_id: s_3flUmUTm-GW2-ezdJHrKmi
          stance: supports
          locator: CBDB：兄弟 王汝鲁（126502）之父／母 王可
          quotation: null
          interpretation_note: 由兄弟关系推断：王法祖 与 王汝鲁 为同胞（CBDB 记「兄」），王汝鲁 之父／母即 王法祖 之父／母。
          source:
            id: s_3flUmUTm-GW2-ezdJHrKmi
            source_type: api_record
            title: 中国历代人物传记资料库：王法祖（CBDB 334092）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334092&o=json
            external_identifier: CBDB:334092
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_51Pca5wdng4NB9T2FpYuFX
        status: active
        display_name: 王可
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_nfb5dhLnZK1zlB4zDAylRi
        subject_person_id: p_iRoPCMQGG7T8QWQEfbMdBx
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sXjzq1eE3XnKjFre3JXwb9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OXEOCdcu1HxZpVA4YnH3Ii
          claim_id: c_nfb5dhLnZK1zlB4zDAylRi
          source_id: s_3flUmUTm-GW2-ezdJHrKmi
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126502 王汝魯）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_3flUmUTm-GW2-ezdJHrKmi
            source_type: api_record
            title: 中国历代人物传记资料库：王法祖（CBDB 334092）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334092&o=json
            external_identifier: CBDB:334092
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_iRoPCMQGG7T8QWQEfbMdBx
        status: active
        display_name: 王汝鲁
        merged_into_person_id: null
---

# 王法祖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王法祖，明人物。隆慶二年進士，籍贯南陽。（中国历代人物传记资料库 CBDB 334092） | accepted |
| name.primary | 王法祖 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_51Pca5wdng4NB9T2FpYuFX | 王可 | accepted |
| other | p_iRoPCMQGG7T8QWQEfbMdBx | 王汝鲁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王法祖（CBDB 334092）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334092&o=json)
