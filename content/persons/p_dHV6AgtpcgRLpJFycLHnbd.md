---
schema: wang-person/v1
id: p_dHV6AgtpcgRLpJFycLHnbd
status: active
merged_into: null
display_name: 王信
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7pj7pu6npq7tv9H5bNz7EQ
        subject_person_id: p_dHV6AgtpcgRLpJFycLHnbd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王信
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2ss9pDP4mDwQG899PL5bKf
          claim_id: c_7pj7pu6npq7tv9H5bNz7EQ
          source_id: s_BrL8FgKbWmjfM3JrsFKFu6
          stance: supports
          locator: CBDB:67212
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（67212）
          source: &a1
            id: s_BrL8FgKbWmjfM3JrsFKFu6
            source_type: api_record
            title: 中国历代人物传记资料库：王信（CBDB 67212）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67212&o=json
            external_identifier: CBDB:67212
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.978Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cvWRaVPM5BDvN8fzyTt7tB
        subject_person_id: p_dHV6AgtpcgRLpJFycLHnbd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王信，明人物。明清進士進士，籍贯上蔡，入仕進士，曾任太僕寺少卿。（中国历代人物传记资料库 CBDB 67212）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_v_EAqt0_6ncNwhDg7dh7Nq
          claim_id: c_cvWRaVPM5BDvN8fzyTt7tB
          source_id: s_BrL8FgKbWmjfM3JrsFKFu6
          stance: supports
          locator: CBDB:67212
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_pB__r2kpggkzHomtmlZb8O
        subject_person_id: p_WxESaqfXoRne3LVPqRgpV4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dHV6AgtpcgRLpJFycLHnbd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CFzD8E9X8yyonwDE5ZGi4v
          claim_id: c_pB__r2kpggkzHomtmlZb8O
          source_id: s_BrL8FgKbWmjfM3JrsFKFu6
          stance: supports
          locator: 正統四年進士登科錄:一卷，第三甲第五十九名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_WxESaqfXoRne3LVPqRgpV4
        status: active
        display_name: 王珪
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c__zfXkDsovF5UR7x9Rpu9Pb
        subject_person_id: p_dHV6AgtpcgRLpJFycLHnbd
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_N2U9djG3uDbtejoR1EKSH1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZBsWpDVMZ3fbBfmcqc6zU3
          claim_id: c__zfXkDsovF5UR7x9Rpu9Pb
          source_id: s_-AcDum9h1TZLWC_OpTZ4JB
          stance: supports
          locator: 正統四年進士登科錄:一卷，第三甲第五十九名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_-AcDum9h1TZLWC_OpTZ4JB
            source_type: api_record
            title: 中国历代人物传记资料库：梅氏(王信妻)（CBDB 237443）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237443&o=json
            external_identifier: CBDB:237443
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_N2U9djG3uDbtejoR1EKSH1
        status: active
        display_name: 梅氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_LEEGxq-R4sL1Gr27HTStcE
        subject_person_id: p_4A1ftN3jcTq1MaGNMSCbVY
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_dHV6AgtpcgRLpJFycLHnbd
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iLKX51_I62Tnx8Pkhg-WHI
          claim_id: c_LEEGxq-R4sL1Gr27HTStcE
          source_id: s_BrL8FgKbWmjfM3JrsFKFu6
          stance: supports
          locator: 正統四年進士登科錄:一卷，第三甲第五十九名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_4A1ftN3jcTq1MaGNMSCbVY
        status: active
        display_name: 王善興
        merged_into_person_id: null
    - claim:
        id: c_PMyjOhQcuUXtL5-sta_DCb
        subject_person_id: p_1a5DvSKyHZPpss3j5aDdef
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_dHV6AgtpcgRLpJFycLHnbd
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1Q9O4dlR0BdLyP8L9sqlPg
          claim_id: c_PMyjOhQcuUXtL5-sta_DCb
          source_id: s_BrL8FgKbWmjfM3JrsFKFu6
          stance: supports
          locator: 正統四年進士登科錄:一卷，第三甲第五十九名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_1a5DvSKyHZPpss3j5aDdef
        status: active
        display_name: 王達志
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_S6QobJg9f6KuFOH7eKRsdQ
        subject_person_id: p_BFgu3SogUB9549PW3BJcn9
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dHV6AgtpcgRLpJFycLHnbd
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oJAcZoyf11tcvqM8ULlDhP
          claim_id: c_S6QobJg9f6KuFOH7eKRsdQ
          source_id: s_vMyPLSoGYC-w-HM-JgUXhn
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 67212 王信）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_vMyPLSoGYC-w-HM-JgUXhn
            source_type: api_record
            title: 中国历代人物传记资料库：王惠（CBDB 237447）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237447&o=json
            external_identifier: CBDB:237447
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BFgu3SogUB9549PW3BJcn9
        status: active
        display_name: 王惠
        merged_into_person_id: null
    - claim:
        id: c__UOVPmj0yp7g0mShe39l9-
        subject_person_id: p_HQmGS2187395LLmBpEXNhv
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dHV6AgtpcgRLpJFycLHnbd
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9apapUHPOO1QlwDnYy3hpV
          claim_id: c__UOVPmj0yp7g0mShe39l9-
          source_id: s_XNuCYuZipnPpA28jhPZXHr
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 67212 王信）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_XNuCYuZipnPpA28jhPZXHr
            source_type: api_record
            title: 中国历代人物传记资料库：王思聰（CBDB 237444）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237444&o=json
            external_identifier: CBDB:237444
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HQmGS2187395LLmBpEXNhv
        status: active
        display_name: 王思聰
        merged_into_person_id: null
    - claim:
        id: c_l4ZkvIDF8l0_sEDZOSfyuY
        subject_person_id: p_Jsam511Bo4XWttmCAXo39u
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dHV6AgtpcgRLpJFycLHnbd
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kouAX-nU38Z8He0h7MooA7
          claim_id: c_l4ZkvIDF8l0_sEDZOSfyuY
          source_id: s_EG7brDyF5CttJGC3E8ovjG
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 67212 王信）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_EG7brDyF5CttJGC3E8ovjG
            source_type: api_record
            title: 中国历代人物传记资料库：王敏（CBDB 237446）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237446&o=json
            external_identifier: CBDB:237446
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Jsam511Bo4XWttmCAXo39u
        status: active
        display_name: 王敏
        merged_into_person_id: null
    - claim:
        id: c_3UF_RcteK_x6Xd8k4Cuumn
        subject_person_id: p_QuRKgQ7yCNQtwDzkmHCzuU
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dHV6AgtpcgRLpJFycLHnbd
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Wg0jdf8D5fXF9KZnDlY-ID
          claim_id: c_3UF_RcteK_x6Xd8k4Cuumn
          source_id: s_Q9gJljrUfmMvQDIsi3WNG2
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 67212 王信）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Q9gJljrUfmMvQDIsi3WNG2
            source_type: api_record
            title: 中国历代人物传记资料库：王思明（CBDB 237445）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237445&o=json
            external_identifier: CBDB:237445
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QuRKgQ7yCNQtwDzkmHCzuU
        status: active
        display_name: 王思明
        merged_into_person_id: null
---

# 王信

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王信 | accepted |
| bio.summary | 王信，明人物。明清進士進士，籍贯上蔡，入仕進士，曾任太僕寺少卿。（中国历代人物传记资料库 CBDB 67212） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_WxESaqfXoRne3LVPqRgpV4 | 王珪 | accepted |
| spouses | p_N2U9djG3uDbtejoR1EKSH1 | 梅氏 | accepted |
| ancestors | p_4A1ftN3jcTq1MaGNMSCbVY | 王善興 | accepted |
| ancestors | p_1a5DvSKyHZPpss3j5aDdef | 王達志 | accepted |
| other | p_BFgu3SogUB9549PW3BJcn9 | 王惠 | accepted |
| other | p_HQmGS2187395LLmBpEXNhv | 王思聰 | accepted |
| other | p_Jsam511Bo4XWttmCAXo39u | 王敏 | accepted |
| other | p_QuRKgQ7yCNQtwDzkmHCzuU | 王思明 | accepted |

## 外部来源

- [中国历代人物传记资料库：梅氏(王信妻)（CBDB 237443）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237443&o=json)
- [中国历代人物传记资料库：王惠（CBDB 237447）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237447&o=json)
- [中国历代人物传记资料库：王敏（CBDB 237446）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237446&o=json)
- [中国历代人物传记资料库：王思聰（CBDB 237444）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237444&o=json)
- [中国历代人物传记资料库：王思明（CBDB 237445）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237445&o=json)
- [中国历代人物传记资料库：王信（CBDB 67212）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67212&o=json)
