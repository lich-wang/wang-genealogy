---
schema: wang-person/v1
id: p_qC31C42hD4UK4m3NDzMPZB
status: active
merged_into: null
display_name: 王暐
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wx4RXFA5Gb15XdpeCudN58
        subject_person_id: p_qC31C42hD4UK4m3NDzMPZB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王暐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GDCu5p3pqHYVZykbee4dXt
          claim_id: c_wx4RXFA5Gb15XdpeCudN58
          source_id: s_FeDJuE3J2mE54BzJxLz2j5
          stance: supports
          locator: CBDB:68343
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（68343）
          source: &a1
            id: s_FeDJuE3J2mE54BzJxLz2j5
            source_type: api_record
            title: 中国历代人物传记资料库：王暐（CBDB 68343）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68343&o=json
            external_identifier: CBDB:68343
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.069Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JCXijJpQpn8waG7mCM63k1
        subject_person_id: p_qC31C42hD4UK4m3NDzMPZB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UYBZVszDoDQ7YD2DfALPaX
          claim_id: c_JCXijJpQpn8waG7mCM63k1
          source_id: s_FeDJuE3J2mE54BzJxLz2j5
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ZlYo6xkp99jNi6RrN9qeqj
        subject_person_id: p_qGQsVR5gzeQy8Y9aNmPG9C
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qC31C42hD4UK4m3NDzMPZB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_X_d1t7z6aKXprWxdf2pfTV
          claim_id: c_ZlYo6xkp99jNi6RrN9qeqj
          source_id: s_hSYp21GgkBHXpWFmbVWv24
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第二十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_hSYp21GgkBHXpWFmbVWv24
            source_type: api_record
            title: 中国历代人物传记资料库：王槐（CBDB 280915）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280915&o=json
            external_identifier: CBDB:280915
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.025Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_qGQsVR5gzeQy8Y9aNmPG9C
        status: active
        display_name: 王槐
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_b-cQjUiexm9STfzGbR58DN
        subject_person_id: p_214MBaPhXVFJfNepXzTYyz
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_qC31C42hD4UK4m3NDzMPZB
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x-LGoqe-mI57g61gtk5TRD
          claim_id: c_b-cQjUiexm9STfzGbR58DN
          source_id: s_mUbQPCz3fqEDbQuJT5Gv4x
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第二十八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_mUbQPCz3fqEDbQuJT5Gv4x
            source_type: api_record
            title: 中国历代人物传记资料库：王庸（CBDB 280913）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280913&o=json
            external_identifier: CBDB:280913
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.023Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_214MBaPhXVFJfNepXzTYyz
        status: active
        display_name: 王庸
        merged_into_person_id: null
    - claim:
        id: c_2a8VodHRnr6lvUgkMRaX2o
        subject_person_id: p_Dmoy66LxstZ24RLkjF8qKt
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_qC31C42hD4UK4m3NDzMPZB
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Wi_d5hpgNp4Dlro6r7TqOc
          claim_id: c_2a8VodHRnr6lvUgkMRaX2o
          source_id: s_BnPKsABXrLr11M9Va3gRo7
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第二十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_BnPKsABXrLr11M9Va3gRo7
            source_type: api_record
            title: 中国历代人物传记资料库：王升（CBDB 280914）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280914&o=json
            external_identifier: CBDB:280914
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.024Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Dmoy66LxstZ24RLkjF8qKt
        status: active
        display_name: 王升
        merged_into_person_id: null
    - claim:
        id: c_sGgZBc25gRsSCH82OJj9-a
        subject_person_id: p_g2mQqyo56V7mDby5TWwKou
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_qC31C42hD4UK4m3NDzMPZB
        generation_count: 4
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jMWMruJDkR2opRsE3m10EB
          claim_id: c_sGgZBc25gRsSCH82OJj9-a
          source_id: s_5ksFK3oZ89eYJS4TgEHDeY
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），12015：玄孫;四世孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5ksFK3oZ89eYJS4TgEHDeY
            source_type: api_record
            title: 中国历代人物传记资料库：王蒙吉（CBDB 526181）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526181&o=json
            external_identifier: CBDB:526181
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:17.868Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_g2mQqyo56V7mDby5TWwKou
        status: active
        display_name: 王蒙吉
        merged_into_person_id: null
    - claim:
        id: c_zG8fioHhDKJfcMS3isXQMa
        subject_person_id: p_wV4tfa6rqeec47q9qXtyoE
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_qC31C42hD4UK4m3NDzMPZB
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cbLUuD6FvjGU5EPw6iKK0t
          claim_id: c_zG8fioHhDKJfcMS3isXQMa
          source_id: s_NzpWEdSF1sqaodxcDrqZDb
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），12015：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_NzpWEdSF1sqaodxcDrqZDb
            source_type: api_record
            title: 中国历代人物传记资料库：王庸世（CBDB 526180）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526180&o=json
            external_identifier: CBDB:526180
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:17.868Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_wV4tfa6rqeec47q9qXtyoE
        status: active
        display_name: 王庸世
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王暐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王暐 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qGQsVR5gzeQy8Y9aNmPG9C | 王槐 | accepted |
| ancestors | p_214MBaPhXVFJfNepXzTYyz | 王庸 | accepted |
| ancestors | p_Dmoy66LxstZ24RLkjF8qKt | 王升 | accepted |
| ancestors | p_g2mQqyo56V7mDby5TWwKou | 王蒙吉 | accepted |
| ancestors | p_wV4tfa6rqeec47q9qXtyoE | 王庸世 | accepted |

## 外部来源

- [中国历代人物传记资料库：王槐（CBDB 280915）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280915&o=json)
- [中国历代人物传记资料库：王蒙吉（CBDB 526181）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526181&o=json)
- [中国历代人物传记资料库：王升（CBDB 280914）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280914&o=json)
- [中国历代人物传记资料库：王暐（CBDB 68343）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68343&o=json)
- [中国历代人物传记资料库：王庸（CBDB 280913）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280913&o=json)
- [中国历代人物传记资料库：王庸世（CBDB 526180）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526180&o=json)
