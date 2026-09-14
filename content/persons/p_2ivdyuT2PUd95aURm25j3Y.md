---
schema: wang-person/v1
id: p_2ivdyuT2PUd95aURm25j3Y
status: active
merged_into: null
display_name: 王俸
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qqAEwtjPczGmX2XZtLx3CH
        subject_person_id: p_2ivdyuT2PUd95aURm25j3Y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_h89fzjZXiKpYpfZ3GJHyC3
          claim_id: c_qqAEwtjPczGmX2XZtLx3CH
          source_id: s_yBSfQfimThTBXufFM9ub6Q
          stance: supports
          locator: CBDB:200767
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200767）
          source: &a1
            id: s_yBSfQfimThTBXufFM9ub6Q
            source_type: api_record
            title: 中国历代人物传记资料库：王俸（CBDB 200767）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200767&o=json
            external_identifier: CBDB:200767
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.635Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_tNJvVAYMaNe4TtCsSPUC3G
        subject_person_id: p_2ivdyuT2PUd95aURm25j3Y
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1459年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nGFdFcJfB4rynxfphXZhd2
          claim_id: c_tNJvVAYMaNe4TtCsSPUC3G
          source_id: s_yBSfQfimThTBXufFM9ub6Q
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
        id: c_bFfYWeyByiHWZ14dcvTHok
        subject_person_id: p_2ivdyuT2PUd95aURm25j3Y
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俸（生于1459年），明人物。明清進士進士，籍贯吳縣，入仕進士。（中国历代人物传记资料库 CBDB 200767）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sONzLZcteog4m95fiW2P1r
          claim_id: c_bFfYWeyByiHWZ14dcvTHok
          source_id: s_yBSfQfimThTBXufFM9ub6Q
          stance: supports
          locator: CBDB:200767
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_lylmn-8XHYosC0fNsB0pSO
        subject_person_id: p_THF2LeRLB4NBKZ9TDPgftt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2ivdyuT2PUd95aURm25j3Y
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ermx12HtELyloBXunklop3
          claim_id: c_lylmn-8XHYosC0fNsB0pSO
          source_id: s_yBSfQfimThTBXufFM9ub6Q
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第八十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_THF2LeRLB4NBKZ9TDPgftt
        status: active
        display_name: 王叔紀
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_qfX7jF8Bfze8teQjMwT6y9
        subject_person_id: p_2ivdyuT2PUd95aURm25j3Y
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_fUCadLiuJmMioCibnWapb3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oAa8JfZOYORfQ1irT-v_8G
          claim_id: c_qfX7jF8Bfze8teQjMwT6y9
          source_id: s_QFVyBy0WkWEV6M7zJk9lTG
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第八十三名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_QFVyBy0WkWEV6M7zJk9lTG
            source_type: api_record
            title: 中国历代人物传记资料库：顧氏(王俸妻)（CBDB 262607）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262607&o=json
            external_identifier: CBDB:262607
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fUCadLiuJmMioCibnWapb3
        status: active
        display_name: 顧氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_JUQ3bWlfTYg9dZPx5LQqaB
        subject_person_id: p_SuoASrvEvTdJvx88W9i9eq
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2ivdyuT2PUd95aURm25j3Y
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kyY16zK6rV9RheTTtlukD9
          claim_id: c_JUQ3bWlfTYg9dZPx5LQqaB
          source_id: s_yBSfQfimThTBXufFM9ub6Q
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第八十三名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_SuoASrvEvTdJvx88W9i9eq
        status: active
        display_name: 王德成
        merged_into_person_id: null
    - claim:
        id: c_8v2f3RRR6UB64kNzZPdKt5
        subject_person_id: p_V43e1uDnknsPX7FA5hH2MD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2ivdyuT2PUd95aURm25j3Y
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-YifrCDzVYy-DakUpDecYu
          claim_id: c_8v2f3RRR6UB64kNzZPdKt5
          source_id: s_yBSfQfimThTBXufFM9ub6Q
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第八十三名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_V43e1uDnknsPX7FA5hH2MD
        status: active
        display_name: 王廷吉
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_mpdQgBAhh5H17KrXBv8PC5
        subject_person_id: p_2ivdyuT2PUd95aURm25j3Y
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_3drg2zTZv8jAo4PQxGKyBw
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wvLI4Aar9tPIgIUz6Lu-jv
          claim_id: c_mpdQgBAhh5H17KrXBv8PC5
          source_id: s_HBJGX9NY7Iaruv_duecDRH
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200767 王俸）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_HBJGX9NY7Iaruv_duecDRH
            source_type: api_record
            title: 中国历代人物传记资料库：王鵬（CBDB 262608）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262608&o=json
            external_identifier: CBDB:262608
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3drg2zTZv8jAo4PQxGKyBw
        status: active
        display_name: 王鵬
        merged_into_person_id: null
    - claim:
        id: c_pOG26YYG8ZF-yVwL4K6snW
        subject_person_id: p_2ivdyuT2PUd95aURm25j3Y
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ogqoLs3TK69PWEepYEtziE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mTQEpZpLT-emz7TPaRIugM
          claim_id: c_pOG26YYG8ZF-yVwL4K6snW
          source_id: s_uvBKeW1yeFzAcGk_E2mE_G
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200767 王俸）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_uvBKeW1yeFzAcGk_E2mE_G
            source_type: api_record
            title: 中国历代人物传记资料库：王鶴（CBDB 262609）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262609&o=json
            external_identifier: CBDB:262609
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ogqoLs3TK69PWEepYEtziE
        status: active
        display_name: 王鶴
        merged_into_person_id: null
---

# 王俸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王俸 | accepted |
| birth.date | 1459年 | accepted |
| bio.summary | 王俸（生于1459年），明人物。明清進士進士，籍贯吳縣，入仕進士。（中国历代人物传记资料库 CBDB 200767） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_THF2LeRLB4NBKZ9TDPgftt | 王叔紀 | accepted |
| spouses | p_fUCadLiuJmMioCibnWapb3 | 顧氏 | accepted |
| ancestors | p_SuoASrvEvTdJvx88W9i9eq | 王德成 | accepted |
| ancestors | p_V43e1uDnknsPX7FA5hH2MD | 王廷吉 | accepted |
| other | p_3drg2zTZv8jAo4PQxGKyBw | 王鵬 | accepted |
| other | p_ogqoLs3TK69PWEepYEtziE | 王鶴 | accepted |

## 外部来源

- [中国历代人物传记资料库：顧氏(王俸妻)（CBDB 262607）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262607&o=json)
- [中国历代人物传记资料库：王俸（CBDB 200767）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200767&o=json)
- [中国历代人物传记资料库：王鶴（CBDB 262609）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262609&o=json)
- [中国历代人物传记资料库：王鵬（CBDB 262608）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262608&o=json)
