---
schema: wang-person/v1
id: p_KL6pD2p9SR6r7j4F89boFc
status: active
merged_into: null
display_name: 王衡
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_s7r15EMAcA867SBRRgxAf2
        subject_person_id: p_KL6pD2p9SR6r7j4F89boFc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王衡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WXVdFqrxwjuc67A8iv96PP
          claim_id: c_s7r15EMAcA867SBRRgxAf2
          source_id: s_fXkoxige6XKe16u4aLm1LC
          stance: supports
          locator: CBDB:126831
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126831）
          source: &a1
            id: s_fXkoxige6XKe16u4aLm1LC
            source_type: api_record
            title: 中国历代人物传记资料库：王衡（CBDB 126831）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126831&o=json
            external_identifier: CBDB:126831
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.240Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_684oZaZMciL8iQDyuJ7pDF
        subject_person_id: p_KL6pD2p9SR6r7j4F89boFc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王衡，明人物。籍贯閩縣，入仕進士。（中国历代人物传记资料库 CBDB 126831）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gmcikqW2YOAYVyoPkbh89Q
          claim_id: c_684oZaZMciL8iQDyuJ7pDF
          source_id: s_fXkoxige6XKe16u4aLm1LC
          stance: supports
          locator: CBDB:126831
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_yuKy0CqhEGl2Qc5OSg4r42
        subject_person_id: p_xVTypDWdUQ3wcoicLvKHN5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KL6pD2p9SR6r7j4F89boFc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gDysBRfSV_y6QpzDLxEnhh
          claim_id: c_yuKy0CqhEGl2Qc5OSg4r42
          source_id: s_fXkoxige6XKe16u4aLm1LC
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第二甲第七十四名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_xVTypDWdUQ3wcoicLvKHN5
        status: active
        display_name: 王穆
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_dogCNmQY4nfg5DNE1L_wbY
        subject_person_id: p_KL6pD2p9SR6r7j4F89boFc
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_3yCSR27oiW5NCm7ErZYvAN
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4FwPdMk-clLMneQgewXa3z
          claim_id: c_dogCNmQY4nfg5DNE1L_wbY
          source_id: s_JoAVSj0BjODDfjPJFKI4cx
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第二甲第七十四名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_JoAVSj0BjODDfjPJFKI4cx
            source_type: api_record
            title: 中国历代人物传记资料库：林氏(王衡妻)（CBDB 255525）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255525&o=json
            external_identifier: CBDB:255525
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3yCSR27oiW5NCm7ErZYvAN
        status: active
        display_name: 林氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_4xFVgx1eoD0SAoOHaYndwB
        subject_person_id: p_BAsTPzr6Vm683uWTRsXWEW
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_KL6pD2p9SR6r7j4F89boFc
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lVfHCe3UdsSQHTbYrbTfVh
          claim_id: c_4xFVgx1eoD0SAoOHaYndwB
          source_id: s_fXkoxige6XKe16u4aLm1LC
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第二甲第七十四名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_BAsTPzr6Vm683uWTRsXWEW
        status: active
        display_name: 王廣齋
        merged_into_person_id: null
    - claim:
        id: c_egJ6VOVXgqKa_sorop_vBj
        subject_person_id: p_GV5BzNPr7Y3sJXX4Dxcndh
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_KL6pD2p9SR6r7j4F89boFc
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h94-zuwJ5QTgsk8oKIaIH9
          claim_id: c_egJ6VOVXgqKa_sorop_vBj
          source_id: s_fXkoxige6XKe16u4aLm1LC
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第二甲第七十四名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_GV5BzNPr7Y3sJXX4Dxcndh
        status: active
        display_name: 王志崇
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_dzcmjkRHEF3jTuqnOZyKiv
        subject_person_id: p_29EmADKKSo6ecWRXrZCGVy
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_KL6pD2p9SR6r7j4F89boFc
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_b4adAr1fa7wBr1vLJM5bNL
          claim_id: c_dzcmjkRHEF3jTuqnOZyKiv
          source_id: s_iDuycNZhNTrazR866fjg7A
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126831 王衡）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_iDuycNZhNTrazR866fjg7A
            source_type: api_record
            title: 中国历代人物传记资料库：王璣（CBDB 255536）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255536&o=json
            external_identifier: CBDB:255536
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_29EmADKKSo6ecWRXrZCGVy
        status: active
        display_name: 王璣
        merged_into_person_id: null
    - claim:
        id: c_ZBIs9BGZvAsMeC5KiMy31u
        subject_person_id: p_KL6pD2p9SR6r7j4F89boFc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_LHKoMbFGzi2LiWjocEU5qY
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qLD2gkTSZfsTq7qAD3675C
          claim_id: c_ZBIs9BGZvAsMeC5KiMy31u
          source_id: s_sV1TTLf5r2wFwh1LUQ2_dz
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126831 王衡）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_sV1TTLf5r2wFwh1LUQ2_dz
            source_type: api_record
            title: 中国历代人物传记资料库：王㻊（CBDB 255547）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255547&o=json
            external_identifier: CBDB:255547
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LHKoMbFGzi2LiWjocEU5qY
        status: active
        display_name: 王㻊
        merged_into_person_id: null
---

# 王衡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王衡 | accepted |
| bio.summary | 王衡，明人物。籍贯閩縣，入仕進士。（中国历代人物传记资料库 CBDB 126831） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_xVTypDWdUQ3wcoicLvKHN5 | 王穆 | accepted |
| spouses | p_3yCSR27oiW5NCm7ErZYvAN | 林氏 | accepted |
| ancestors | p_BAsTPzr6Vm683uWTRsXWEW | 王廣齋 | accepted |
| ancestors | p_GV5BzNPr7Y3sJXX4Dxcndh | 王志崇 | accepted |
| other | p_29EmADKKSo6ecWRXrZCGVy | 王璣 | accepted |
| other | p_LHKoMbFGzi2LiWjocEU5qY | 王㻊 | accepted |

## 外部来源

- [中国历代人物传记资料库：林氏(王衡妻)（CBDB 255525）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255525&o=json)
- [中国历代人物传记资料库：王衡（CBDB 126831）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126831&o=json)
- [中国历代人物传记资料库：王璣（CBDB 255536）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255536&o=json)
- [中国历代人物传记资料库：王㻊（CBDB 255547）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255547&o=json)
