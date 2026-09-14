---
schema: wang-person/v1
id: p_bfSy8dPRhP5ZK4VbYiPWT2
status: active
merged_into: null
display_name: 王正
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_o89F69N6xayG7WRUP41NNU
        subject_person_id: p_bfSy8dPRhP5ZK4VbYiPWT2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Zwsg9HL5RMXrH9ysFsKrZo
          claim_id: c_o89F69N6xayG7WRUP41NNU
          source_id: s_FLTe23fQ3Yas8yRVm4tAdp
          stance: supports
          locator: CBDB:208144
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（208144）
          source: &a1
            id: s_FLTe23fQ3Yas8yRVm4tAdp
            source_type: api_record
            title: 中国历代人物传记资料库：王正（CBDB 208144）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208144&o=json
            external_identifier: CBDB:208144
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.947Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_c7B6pmQE195WBCPVVXNHA5
        subject_person_id: p_bfSy8dPRhP5ZK4VbYiPWT2
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1420年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QP5fTuMGqQEhzQVP3A9DDf
          claim_id: c_c7B6pmQE195WBCPVVXNHA5
          source_id: s_FLTe23fQ3Yas8yRVm4tAdp
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
        id: c_4BFAGj2KwQp5SVGykCAhXP
        subject_person_id: p_bfSy8dPRhP5ZK4VbYiPWT2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正（生于1420年），明人物。正統十三年進士，籍贯夏縣，入仕進士。（中国历代人物传记资料库 CBDB 208144）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fdFdBf_68wgjU2ltmKvXY3
          claim_id: c_4BFAGj2KwQp5SVGykCAhXP
          source_id: s_FLTe23fQ3Yas8yRVm4tAdp
          stance: supports
          locator: CBDB:208144
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_WmtVi8hpiHdzrVIfkItVp3
        subject_person_id: p_2h2iTcWMQkG9VP954w7RTi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bfSy8dPRhP5ZK4VbYiPWT2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zbKj98JeC6KWficHAeAQvO
          claim_id: c_WmtVi8hpiHdzrVIfkItVp3
          source_id: s_Q24rEAHyuRo4MFbpVkFBFd
          stance: supports
          locator: 正統十三年進士登科錄:一卷，第三甲第四十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Q24rEAHyuRo4MFbpVkFBFd
            source_type: api_record
            title: 中国历代人物传记资料库：王礪（CBDB 241021）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241021&o=json
            external_identifier: CBDB:241021
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.936Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2h2iTcWMQkG9VP954w7RTi
        status: active
        display_name: 王礪
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_LAWFhC0Iv2ByXrapOT1zGb
        subject_person_id: p_D7bGdQmpFXERhFMYshmm25
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_bfSy8dPRhP5ZK4VbYiPWT2
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jPPkcZZKtmthnfYDVtzokp
          claim_id: c_LAWFhC0Iv2ByXrapOT1zGb
          source_id: s_EzuxHaGfTCtDWukPZ5ENqP
          stance: supports
          locator: 正統十三年進士登科錄:一卷，第三甲第四十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_EzuxHaGfTCtDWukPZ5ENqP
            source_type: api_record
            title: 中国历代人物传记资料库：王仲文（CBDB 241018）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241018&o=json
            external_identifier: CBDB:241018
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.935Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_D7bGdQmpFXERhFMYshmm25
        status: active
        display_name: 王仲文
        merged_into_person_id: null
    - claim:
        id: c_73yfrAJk-Gm3i7F6Hs_i4x
        subject_person_id: p_TxqyXHeQ3S5iC4LfjUzCsj
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_bfSy8dPRhP5ZK4VbYiPWT2
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t0EqPyQUVkuqfNUyJUZFB8
          claim_id: c_73yfrAJk-Gm3i7F6Hs_i4x
          source_id: s_qQguAKHngDXJ5LiBSZ4KvS
          stance: supports
          locator: 正統十三年進士登科錄:一卷，第三甲第四十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_qQguAKHngDXJ5LiBSZ4KvS
            source_type: api_record
            title: 中国历代人物传记资料库：王翰（CBDB 241019）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241019&o=json
            external_identifier: CBDB:241019
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.935Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_TxqyXHeQ3S5iC4LfjUzCsj
        status: active
        display_name: 王翰
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_OH-xD3U3Q3BGmGzz6Ux9zl
        subject_person_id: p_A6iFsSXAzpYqQ7Dx2tHHzh
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_bfSy8dPRhP5ZK4VbYiPWT2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XRG3-10nxH4KZNAQDeqbQm
          claim_id: c_OH-xD3U3Q3BGmGzz6Ux9zl
          source_id: s_xdcm72ol3Qmd9BrqMZMecF
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 208144 王正）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_xdcm72ol3Qmd9BrqMZMecF
            source_type: api_record
            title: 中国历代人物传记资料库：王賢（CBDB 241026）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241026&o=json
            external_identifier: CBDB:241026
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_A6iFsSXAzpYqQ7Dx2tHHzh
        status: active
        display_name: 王賢
        merged_into_person_id: null
    - claim:
        id: c_2w7Mxp-Grzkh5XugODWR_t
        subject_person_id: p_CMcPDAVq4dBFZKfPEAkaFE
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_bfSy8dPRhP5ZK4VbYiPWT2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Kscp7R1kbkgE5OXNyw5bGe
          claim_id: c_2w7Mxp-Grzkh5XugODWR_t
          source_id: s_PtjeH2VNzcpsM5h8m3m2D2
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 208144 王正）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_PtjeH2VNzcpsM5h8m3m2D2
            source_type: api_record
            title: 中国历代人物传记资料库：王福（CBDB 241025）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241025&o=json
            external_identifier: CBDB:241025
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CMcPDAVq4dBFZKfPEAkaFE
        status: active
        display_name: 王福
        merged_into_person_id: null
    - claim:
        id: c_sjT7TjvqR5sDSrFw01xikc
        subject_person_id: p_bfSy8dPRhP5ZK4VbYiPWT2
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_j2HzE3F4gKwm8dP9vGQ9G1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__jfiFZuwEcqKFAgVuCZsg5
          claim_id: c_sjT7TjvqR5sDSrFw01xikc
          source_id: s_jk1I9EgQVUvnsxCMPUNNaq
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 208144 王正）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_jk1I9EgQVUvnsxCMPUNNaq
            source_type: api_record
            title: 中国历代人物传记资料库：王聰（CBDB 241027）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241027&o=json
            external_identifier: CBDB:241027
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_j2HzE3F4gKwm8dP9vGQ9G1
        status: active
        display_name: 王聰
        merged_into_person_id: null
---

# 王正

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王正 | accepted |
| birth.date | 1420年 | accepted |
| bio.summary | 王正（生于1420年），明人物。正統十三年進士，籍贯夏縣，入仕進士。（中国历代人物传记资料库 CBDB 208144） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2h2iTcWMQkG9VP954w7RTi | 王礪 | accepted |
| ancestors | p_D7bGdQmpFXERhFMYshmm25 | 王仲文 | accepted |
| ancestors | p_TxqyXHeQ3S5iC4LfjUzCsj | 王翰 | accepted |
| other | p_A6iFsSXAzpYqQ7Dx2tHHzh | 王賢 | accepted |
| other | p_CMcPDAVq4dBFZKfPEAkaFE | 王福 | accepted |
| other | p_j2HzE3F4gKwm8dP9vGQ9G1 | 王聰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王聰（CBDB 241027）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241027&o=json)
- [中国历代人物传记资料库：王福（CBDB 241025）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241025&o=json)
- [中国历代人物传记资料库：王翰（CBDB 241019）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241019&o=json)
- [中国历代人物传记资料库：王礪（CBDB 241021）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241021&o=json)
- [中国历代人物传记资料库：王賢（CBDB 241026）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241026&o=json)
- [中国历代人物传记资料库：王正（CBDB 208144）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208144&o=json)
- [中国历代人物传记资料库：王仲文（CBDB 241018）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241018&o=json)
