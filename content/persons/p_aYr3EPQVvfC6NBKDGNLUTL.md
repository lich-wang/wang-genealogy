---
schema: wang-person/v1
id: p_aYr3EPQVvfC6NBKDGNLUTL
status: active
merged_into: null
display_name: 王懋德
revision: 11
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VjBUQQAHA4AByLHukgmKbU
        subject_person_id: p_aYr3EPQVvfC6NBKDGNLUTL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懋德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_M5o3oAWviC9z819GD1yA7T
          claim_id: c_VjBUQQAHA4AByLHukgmKbU
          source_id: s_yqBkGb49Td9o4JjzDQ4ibi
          stance: supports
          locator: CBDB:205756
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（205756）
          source: &a1
            id: s_yqBkGb49Td9o4JjzDQ4ibi
            source_type: api_record
            title: 中国历代人物传记资料库：王懋德（CBDB 205756）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205756&o=json
            external_identifier: CBDB:205756
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.872Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ygf43XzUVx4RQYzb8nyM6G
        subject_person_id: p_aYr3EPQVvfC6NBKDGNLUTL
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1543年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EHceAw4R8Aa2XWCVM2shQE
          claim_id: c_ygf43XzUVx4RQYzb8nyM6G
          source_id: s_yqBkGb49Td9o4JjzDQ4ibi
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
        id: c_Kkc4dipTREwVfGgPE3kNnD
        subject_person_id: p_aYr3EPQVvfC6NBKDGNLUTL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懋德（生于1543年），明人物。明清進士進士，籍贯金谿，入仕進士，曾任翰林編修。（中国历代人物传记资料库 CBDB 205756）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LUN7j6LFcptZOpCE3vlsrG
          claim_id: c_Kkc4dipTREwVfGgPE3kNnD
          source_id: s_yqBkGb49Td9o4JjzDQ4ibi
          stance: supports
          locator: CBDB:205756
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_qoN1o6ckAy43iyTigOOZ-V
        subject_person_id: p_kGHRzXtUaYBnJ8wGBJV9RP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aYr3EPQVvfC6NBKDGNLUTL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eXc60P-nqfneeudv0BYf1f
          claim_id: c_qoN1o6ckAy43iyTigOOZ-V
          source_id: s_Tv1UGEZ2uHHJHsnvp62A5n
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第二甲第十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Tv1UGEZ2uHHJHsnvp62A5n
            source_type: api_record
            title: 中国历代人物传记资料库：王化（CBDB 337967）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337967&o=json
            external_identifier: CBDB:337967
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.522Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_kGHRzXtUaYBnJ8wGBJV9RP
        status: active
        display_name: 王化
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_PI-1AtkRmSVrR3KDT7HTXM
        subject_person_id: p_9xXNfmtYMVSCBkiCQDQ71J
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_aYr3EPQVvfC6NBKDGNLUTL
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_klW2kDs7Oi4n0bqnlO1ciy
          claim_id: c_PI-1AtkRmSVrR3KDT7HTXM
          source_id: s_E971KgqxfwBMUKQsvGBkzc
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第二甲第十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_E971KgqxfwBMUKQsvGBkzc
            source_type: api_record
            title: 中国历代人物传记资料库：王昱（CBDB 337965）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337965&o=json
            external_identifier: CBDB:337965
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.521Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9xXNfmtYMVSCBkiCQDQ71J
        status: active
        display_name: 王昱
        merged_into_person_id: null
    - claim:
        id: c_5IqI1o2ZYIIPWnY4hlAg31
        subject_person_id: p_ipzAENcDKQPY5smGpNDnar
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_aYr3EPQVvfC6NBKDGNLUTL
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zts3gWkIodUa1wtyMZFoNy
          claim_id: c_5IqI1o2ZYIIPWnY4hlAg31
          source_id: s_gRk47zMEhpFt28SyBqZ74h
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第二甲第十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_gRk47zMEhpFt28SyBqZ74h
            source_type: api_record
            title: 中国历代人物传记资料库：王璉（CBDB 337966）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337966&o=json
            external_identifier: CBDB:337966
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.521Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ipzAENcDKQPY5smGpNDnar
        status: active
        display_name: 王璉
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_ak5Q3lWG5lqDd-B5Ly7peq
        subject_person_id: p_3gdkjt43co47VHsAwCLJqd
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_aYr3EPQVvfC6NBKDGNLUTL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kMhbfiwR7VN6Y9qvqpaOJQ
          claim_id: c_ak5Q3lWG5lqDd-B5Ly7peq
          source_id: s_EweJhVp17ubt2OoLGFaYje
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205756 王懋德）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_EweJhVp17ubt2OoLGFaYje
            source_type: api_record
            title: 中国历代人物传记资料库：王懋貞（CBDB 337978）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337978&o=json
            external_identifier: CBDB:337978
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3gdkjt43co47VHsAwCLJqd
        status: active
        display_name: 王懋貞
        merged_into_person_id: null
    - claim:
        id: c_uZ0ZJVZfMRaXfb_UgdpadO
        subject_person_id: p_DcNt3SFdz7EKzkR4mggGmA
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_aYr3EPQVvfC6NBKDGNLUTL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3jnkPRWaeegJxCQFUp84-z
          claim_id: c_uZ0ZJVZfMRaXfb_UgdpadO
          source_id: s__4Z8cBQmr5KXxVo1Gh59Lj
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205756 王懋德）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s__4Z8cBQmr5KXxVo1Gh59Lj
            source_type: api_record
            title: 中国历代人物传记资料库：王懋學（CBDB 337974）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337974&o=json
            external_identifier: CBDB:337974
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DcNt3SFdz7EKzkR4mggGmA
        status: active
        display_name: 王懋學
        merged_into_person_id: null
    - claim:
        id: c_KX2xmEjknTGlUGn81QITbX
        subject_person_id: p_KJJrwKD4rAD5pxVK5Q5kna
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_aYr3EPQVvfC6NBKDGNLUTL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_T4NBVkva0nnOH1fFar4gCM
          claim_id: c_KX2xmEjknTGlUGn81QITbX
          source_id: s_fSNgThC7qgI--Z6VbE951D
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205756 王懋德）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_fSNgThC7qgI--Z6VbE951D
            source_type: api_record
            title: 中国历代人物传记资料库：王懋孝（CBDB 337976）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337976&o=json
            external_identifier: CBDB:337976
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KJJrwKD4rAD5pxVK5Q5kna
        status: active
        display_name: 王懋孝
        merged_into_person_id: null
    - claim:
        id: c_P8S0ioDu4wVSrMHh5gxw-8
        subject_person_id: p_Sj5SgaMTwGzvQR7d1NUC6n
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_aYr3EPQVvfC6NBKDGNLUTL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__SPNUnSWI5v-Erml_BhINm
          claim_id: c_P8S0ioDu4wVSrMHh5gxw-8
          source_id: s_nPcu-8mauZFeE6h6EO37oc
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205756 王懋德）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_nPcu-8mauZFeE6h6EO37oc
            source_type: api_record
            title: 中国历代人物传记资料库：王懋官（CBDB 337971）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337971&o=json
            external_identifier: CBDB:337971
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Sj5SgaMTwGzvQR7d1NUC6n
        status: active
        display_name: 王懋官
        merged_into_person_id: null
    - claim:
        id: c_gThnAS5jvQdfXRlR11a-gf
        subject_person_id: p_V24J9LQqiVAHATFGWP1sC9
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_aYr3EPQVvfC6NBKDGNLUTL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IsT6FtvU0p9NyMYW2NWvg_
          claim_id: c_gThnAS5jvQdfXRlR11a-gf
          source_id: s_dnipIEOtAMrGsmWNcra0YK
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205756 王懋德）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_dnipIEOtAMrGsmWNcra0YK
            source_type: api_record
            title: 中国历代人物传记资料库：王懋忠（CBDB 337977）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337977&o=json
            external_identifier: CBDB:337977
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_V24J9LQqiVAHATFGWP1sC9
        status: active
        display_name: 王懋忠
        merged_into_person_id: null
    - claim:
        id: c__0sHQ8f8iErLM-pt6Q_4OG
        subject_person_id: p_aYr3EPQVvfC6NBKDGNLUTL
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tKum2F5FoXGD328RaJE1uy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E1HJlfYbALDfEkDpRPmgxG
          claim_id: c__0sHQ8f8iErLM-pt6Q_4OG
          source_id: s_KgkMygrMpS84tqaTXodgJz
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205756 王懋德）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_KgkMygrMpS84tqaTXodgJz
            source_type: api_record
            title: 中国历代人物传记资料库：王懋功（CBDB 337973）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337973&o=json
            external_identifier: CBDB:337973
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tKum2F5FoXGD328RaJE1uy
        status: active
        display_name: 王懋功
        merged_into_person_id: null
    - claim:
        id: c_T3Skf4nc1ZFv0utaqtNsX-
        subject_person_id: p_aYr3EPQVvfC6NBKDGNLUTL
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_w1Ax2kLtBNNNB5KyydQwH9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ycc5iNmrpJbWDJkUPJeFC-
          claim_id: c_T3Skf4nc1ZFv0utaqtNsX-
          source_id: s_MJd9tuxurWrD5gK-EOmKwy
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205756 王懋德）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_MJd9tuxurWrD5gK-EOmKwy
            source_type: api_record
            title: 中国历代人物传记资料库：王懋誠（CBDB 337972）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337972&o=json
            external_identifier: CBDB:337972
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_w1Ax2kLtBNNNB5KyydQwH9
        status: active
        display_name: 王懋誠
        merged_into_person_id: null
---

# 王懋德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王懋德 | accepted |
| birth.date | 1543年 | accepted |
| bio.summary | 王懋德（生于1543年），明人物。明清進士進士，籍贯金谿，入仕進士，曾任翰林編修。（中国历代人物传记资料库 CBDB 205756） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_kGHRzXtUaYBnJ8wGBJV9RP | 王化 | accepted |
| ancestors | p_9xXNfmtYMVSCBkiCQDQ71J | 王昱 | accepted |
| ancestors | p_ipzAENcDKQPY5smGpNDnar | 王璉 | accepted |
| other | p_3gdkjt43co47VHsAwCLJqd | 王懋貞 | accepted |
| other | p_DcNt3SFdz7EKzkR4mggGmA | 王懋學 | accepted |
| other | p_KJJrwKD4rAD5pxVK5Q5kna | 王懋孝 | accepted |
| other | p_Sj5SgaMTwGzvQR7d1NUC6n | 王懋官 | accepted |
| other | p_V24J9LQqiVAHATFGWP1sC9 | 王懋忠 | accepted |
| other | p_tKum2F5FoXGD328RaJE1uy | 王懋功 | accepted |
| other | p_w1Ax2kLtBNNNB5KyydQwH9 | 王懋誠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王化（CBDB 337967）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337967&o=json)
- [中国历代人物传记资料库：王璉（CBDB 337966）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337966&o=json)
- [中国历代人物传记资料库：王懋誠（CBDB 337972）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337972&o=json)
- [中国历代人物传记资料库：王懋德（CBDB 205756）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205756&o=json)
- [中国历代人物传记资料库：王懋功（CBDB 337973）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337973&o=json)
- [中国历代人物传记资料库：王懋官（CBDB 337971）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337971&o=json)
- [中国历代人物传记资料库：王懋孝（CBDB 337976）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337976&o=json)
- [中国历代人物传记资料库：王懋學（CBDB 337974）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337974&o=json)
- [中国历代人物传记资料库：王懋貞（CBDB 337978）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337978&o=json)
- [中国历代人物传记资料库：王懋忠（CBDB 337977）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337977&o=json)
- [中国历代人物传记资料库：王昱（CBDB 337965）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337965&o=json)
