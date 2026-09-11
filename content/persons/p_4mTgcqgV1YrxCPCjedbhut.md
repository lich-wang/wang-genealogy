---
schema: wang-person/v1
id: p_4mTgcqgV1YrxCPCjedbhut
status: active
merged_into: null
display_name: 王夢祥
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_24La3CfjcNFjp7Bt8yZEKV
        subject_person_id: p_4mTgcqgV1YrxCPCjedbhut
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢祥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bUthpNNt6GoDEMDu8JbNBU
          claim_id: c_24La3CfjcNFjp7Bt8yZEKV
          source_id: s_7sNgje8q9ptKDQ3Ykodn57
          stance: supports
          locator: CBDB:317543
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（317543）
          source: &a1
            id: s_7sNgje8q9ptKDQ3Ykodn57
            source_type: api_record
            title: 中国历代人物传记资料库：王夢祥（CBDB 317543）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317543&o=json
            external_identifier: CBDB:317543
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.975Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_B8vT2gfJmP8x4Wj9DNZi9F
        subject_person_id: p_4mTgcqgV1YrxCPCjedbhut
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢祥，明人物。嘉靖三十二年進士，曾任府照磨。（中国历代人物传记资料库 CBDB 317543）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ivy9Nlvj3EwKJ4jVQHxqDM
          claim_id: c_B8vT2gfJmP8x4Wj9DNZi9F
          source_id: s_7sNgje8q9ptKDQ3Ykodn57
          stance: supports
          locator: CBDB:317543
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
        id: c_0IPMFEOC6TZ6cxjQCAxqle
        subject_person_id: p_4mTgcqgV1YrxCPCjedbhut
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_FS8BiVQ7A5TRPBTnfjAmZ6
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_buOrtHHxphxdzrKBEjaBPu
          claim_id: c_0IPMFEOC6TZ6cxjQCAxqle
          source_id: s_7sNgje8q9ptKDQ3Ykodn57
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第一百五十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_FS8BiVQ7A5TRPBTnfjAmZ6
        status: active
        display_name: 王彥民
        merged_into_person_id: null
  other: []
---

# 王夢祥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王夢祥 | accepted |
| bio.summary | 王夢祥，明人物。嘉靖三十二年進士，曾任府照磨。（中国历代人物传记资料库 CBDB 317543） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_FS8BiVQ7A5TRPBTnfjAmZ6 | 王彥民 | accepted |

## 外部来源

- [中国历代人物传记资料库：王夢祥（CBDB 317543）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317543&o=json)
