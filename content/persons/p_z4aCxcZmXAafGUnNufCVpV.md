---
schema: wang-person/v1
id: p_z4aCxcZmXAafGUnNufCVpV
status: active
merged_into: null
display_name: 王重
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YxqM3hVnxEznCeDFGJ85ST
        subject_person_id: p_z4aCxcZmXAafGUnNufCVpV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王重
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mbvqGphE5UuwUbvCQFCwb3
          claim_id: c_YxqM3hVnxEznCeDFGJ85ST
          source_id: s_2ruKTegb7Gy8bvnrUTT9Kn
          stance: supports
          locator: CBDB:198394
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（198394）
          source: &a1
            id: s_2ruKTegb7Gy8bvnrUTT9Kn
            source_type: api_record
            title: 中国历代人物传记资料库：王重（CBDB 198394）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198394&o=json
            external_identifier: CBDB:198394
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.487Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_KFBGij7DnN3F8rRwQorbi8
        subject_person_id: p_z4aCxcZmXAafGUnNufCVpV
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1426年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qsBGNR1JBwPwGHE1fHaR5J
          claim_id: c_KFBGij7DnN3F8rRwQorbi8
          source_id: s_2ruKTegb7Gy8bvnrUTT9Kn
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rsEUvN5eMBav52afUBA4ca
        subject_person_id: p_z4aCxcZmXAafGUnNufCVpV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王重（生于1426年），明人物。明清進士進士，籍贯安福，入仕進士。（中国历代人物传记资料库 CBDB 198394）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TaNHzVgaoWQSqZ_DKoV4uz
          claim_id: c_rsEUvN5eMBav52afUBA4ca
          source_id: s_2ruKTegb7Gy8bvnrUTT9Kn
          stance: supports
          locator: CBDB:198394
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_AMuyKP9n77AH-jySOK1VYp
        subject_person_id: p_DYcwLJjTUW6ckv7UzLhqhY
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_z4aCxcZmXAafGUnNufCVpV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wwsmq26mUXuTIlrhJ1IDHg
          claim_id: c_AMuyKP9n77AH-jySOK1VYp
          source_id: s_2ruKTegb7Gy8bvnrUTT9Kn
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第五十九名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DYcwLJjTUW6ckv7UzLhqhY
        status: active
        display_name: 王瀘滔
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_nObnInmPxaEqvZQy__GCEb
        subject_person_id: p_z4aCxcZmXAafGUnNufCVpV
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_MKVagiUUwVnE8tdgURbkVt
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aAlRrPAJzas7zGA4pl2CjQ
          claim_id: c_nObnInmPxaEqvZQy__GCEb
          source_id: s_iACDaM0TXC04SXQJYt1gtl
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第五十九名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_iACDaM0TXC04SXQJYt1gtl
            source_type: api_record
            title: 中国历代人物传记资料库：魏氏(王重妻)（CBDB 266638）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266638&o=json
            external_identifier: CBDB:266638
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_MKVagiUUwVnE8tdgURbkVt
        status: active
        display_name: 魏氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_0ZYAzrWuUJYtEmxzyqf8te
        subject_person_id: p_HDqkFSaJUY2V3BLfMwGNKD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_z4aCxcZmXAafGUnNufCVpV
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PBzXWNBN1KXMISWLZlYr-L
          claim_id: c_0ZYAzrWuUJYtEmxzyqf8te
          source_id: s_2ruKTegb7Gy8bvnrUTT9Kn
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第五十九名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_HDqkFSaJUY2V3BLfMwGNKD
        status: active
        display_name: 王所冲
        merged_into_person_id: null
    - claim:
        id: c_b0sr97y7Wkto9QnUMX2n5R
        subject_person_id: p_XRJkqBKCn19A9ea2jNSaxB
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_z4aCxcZmXAafGUnNufCVpV
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VBi09EYVgxwwk6cJE3-ViQ
          claim_id: c_b0sr97y7Wkto9QnUMX2n5R
          source_id: s_2ruKTegb7Gy8bvnrUTT9Kn
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第五十九名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_XRJkqBKCn19A9ea2jNSaxB
        status: active
        display_name: 王次學
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王重

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王重 | accepted |
| birth.date | 1426年 | accepted |
| bio.summary | 王重（生于1426年），明人物。明清進士進士，籍贯安福，入仕進士。（中国历代人物传记资料库 CBDB 198394） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_DYcwLJjTUW6ckv7UzLhqhY | 王瀘滔 | accepted |
| spouses | p_MKVagiUUwVnE8tdgURbkVt | 魏氏 | accepted |
| ancestors | p_HDqkFSaJUY2V3BLfMwGNKD | 王所冲 | accepted |
| ancestors | p_XRJkqBKCn19A9ea2jNSaxB | 王次學 | accepted |

## 外部来源

- [中国历代人物传记资料库：王重（CBDB 198394）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198394&o=json)
- [中国历代人物传记资料库：魏氏(王重妻)（CBDB 266638）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266638&o=json)
