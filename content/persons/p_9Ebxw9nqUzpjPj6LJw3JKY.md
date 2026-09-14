---
schema: wang-person/v1
id: p_9Ebxw9nqUzpjPj6LJw3JKY
status: active
merged_into: null
display_name: 王用
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Y5xG7XizAd7735CYybWhii
        subject_person_id: p_9Ebxw9nqUzpjPj6LJw3JKY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_A83BdDo6KKXBYnzyHeuFdq
          claim_id: c_Y5xG7XizAd7735CYybWhii
          source_id: s_Rma4qxGwFz8V88WW24kMWD
          stance: supports
          locator: CBDB:207307
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（207307）
          source: &a1
            id: s_Rma4qxGwFz8V88WW24kMWD
            source_type: api_record
            title: 中国历代人物传记资料库：王用（CBDB 207307）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207307&o=json
            external_identifier: CBDB:207307
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.917Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_GwQwaGMn1PMwdeTu1K5JSg
        subject_person_id: p_9Ebxw9nqUzpjPj6LJw3JKY
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1399年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bBDst9g2ANaVgrpzW2NWsb
          claim_id: c_GwQwaGMn1PMwdeTu1K5JSg
          source_id: s_Rma4qxGwFz8V88WW24kMWD
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
        id: c_uK4xX71F1tEySs28wQti1m
        subject_person_id: p_9Ebxw9nqUzpjPj6LJw3JKY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用（生于1399年），明人物。明清進士進士，籍贯慈溪，入仕進士。（中国历代人物传记资料库 CBDB 207307）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__TvDWHvxlO8ihgYjzq58VU
          claim_id: c_uK4xX71F1tEySs28wQti1m
          source_id: s_Rma4qxGwFz8V88WW24kMWD
          stance: supports
          locator: CBDB:207307
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_snpkYZN-VLIj4kwIWhu8k2
        subject_person_id: p_8bLH6jDFtEPUQUPbN8XFMB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9Ebxw9nqUzpjPj6LJw3JKY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KruIZ16c81PaoEu3hr62pj
          claim_id: c_snpkYZN-VLIj4kwIWhu8k2
          source_id: s_Rma4qxGwFz8V88WW24kMWD
          stance: supports
          locator: 宣德八年進士登科錄:一卷，第二甲第十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_8bLH6jDFtEPUQUPbN8XFMB
        status: active
        display_name: 王思名
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_kgvnVZqmtLUH45_0Clrt6O
        subject_person_id: p_9Ebxw9nqUzpjPj6LJw3JKY
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_wMYUME6xXJR6U7u6P699E2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nusZNlgRt0PHbwd2QIwRaL
          claim_id: c_kgvnVZqmtLUH45_0Clrt6O
          source_id: s_LFCluG3WC1UC__mlOfX0fF
          stance: supports
          locator: 宣德八年進士登科錄:一卷，第二甲第十七名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LFCluG3WC1UC__mlOfX0fF
            source_type: api_record
            title: 中国历代人物传记资料库：周氏(王用妻)（CBDB 231090）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231090&o=json
            external_identifier: CBDB:231090
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_wMYUME6xXJR6U7u6P699E2
        status: active
        display_name: 周氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_3U_VnvW1eg9k1Q1Z1eYmwA
        subject_person_id: p_9ouQsZcUnaoXayzCQzDJCM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_9Ebxw9nqUzpjPj6LJw3JKY
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j2vvBP8O7_xMG2-BzScY6q
          claim_id: c_3U_VnvW1eg9k1Q1Z1eYmwA
          source_id: s_Rma4qxGwFz8V88WW24kMWD
          stance: supports
          locator: 宣德八年進士登科錄:一卷，第二甲第十七名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_9ouQsZcUnaoXayzCQzDJCM
        status: active
        display_name: 王仲祥
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_h724BDNL9zfkADr3poTla3
        subject_person_id: p_9Ebxw9nqUzpjPj6LJw3JKY
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_jo3NStgcxkRz8E9qgyWKSq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PKeRuBVygd516xzx0EB4fz
          claim_id: c_h724BDNL9zfkADr3poTla3
          source_id: s_fZ6QhJ7HrMsOFsX8Kgvpaw
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207307 王用）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_fZ6QhJ7HrMsOFsX8Kgvpaw
            source_type: api_record
            title: 中国历代人物传记资料库：王珪（CBDB 231094）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231094&o=json
            external_identifier: CBDB:231094
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jo3NStgcxkRz8E9qgyWKSq
        status: active
        display_name: 王珪
        merged_into_person_id: null
    - claim:
        id: c_aL4gfmICJGXTtmm7gCCK0W
        subject_person_id: p_9Ebxw9nqUzpjPj6LJw3JKY
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rFcX6dGKSpv1ZWghZB7TFM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9znQSZ6ILEAHlBxVPbiVAX
          claim_id: c_aL4gfmICJGXTtmm7gCCK0W
          source_id: s_qJiwRBX_Rn6sxT7YjlTv8l
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207307 王用）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_qJiwRBX_Rn6sxT7YjlTv8l
            source_type: api_record
            title: 中国历代人物传记资料库：王琴（CBDB 231093）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231093&o=json
            external_identifier: CBDB:231093
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rFcX6dGKSpv1ZWghZB7TFM
        status: active
        display_name: 王琴
        merged_into_person_id: null
---

# 王用

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王用 | accepted |
| birth.date | 1399年 | accepted |
| bio.summary | 王用（生于1399年），明人物。明清進士進士，籍贯慈溪，入仕進士。（中国历代人物传记资料库 CBDB 207307） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_8bLH6jDFtEPUQUPbN8XFMB | 王思名 | accepted |
| spouses | p_wMYUME6xXJR6U7u6P699E2 | 周氏 | accepted |
| ancestors | p_9ouQsZcUnaoXayzCQzDJCM | 王仲祥 | accepted |
| other | p_jo3NStgcxkRz8E9qgyWKSq | 王珪 | accepted |
| other | p_rFcX6dGKSpv1ZWghZB7TFM | 王琴 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珪（CBDB 231094）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231094&o=json)
- [中国历代人物传记资料库：王琴（CBDB 231093）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231093&o=json)
- [中国历代人物传记资料库：王用（CBDB 207307）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207307&o=json)
- [中国历代人物传记资料库：周氏(王用妻)（CBDB 231090）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231090&o=json)
