---
schema: wang-person/v1
id: p_CJ4VyLGZZgJRk8JF6RcE65
status: active
merged_into: null
display_name: 王儀
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VKc11ByCA7BTVnDvQroZ9y
        subject_person_id: p_CJ4VyLGZZgJRk8JF6RcE65
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sUzRJ6mBruU1Zampd8h3Jg
          claim_id: c_VKc11ByCA7BTVnDvQroZ9y
          source_id: s_DE9Es8tbGUmsydxcFJxzYj
          stance: supports
          locator: CBDB:198242
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（198242）
          source: &a1
            id: s_DE9Es8tbGUmsydxcFJxzYj
            source_type: api_record
            title: 中国历代人物传记资料库：王儀（CBDB 198242）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198242&o=json
            external_identifier: CBDB:198242
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.475Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_DPHCGYnEGChQym16CLnTpL
        subject_person_id: p_CJ4VyLGZZgJRk8JF6RcE65
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1417年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DXH6gs4V6CnQEB3vvL4wSo
          claim_id: c_DPHCGYnEGChQym16CLnTpL
          source_id: s_DE9Es8tbGUmsydxcFJxzYj
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
        id: c_C8Gdh7eLGLK1fcEpbD2BWE
        subject_person_id: p_CJ4VyLGZZgJRk8JF6RcE65
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儀（生于1417年），明人物。景泰二年進士，籍贯常熟，入仕進士。（中国历代人物传记资料库 CBDB 198242）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vcu-c-9KiRWFoIlgIl3zsd
          claim_id: c_C8Gdh7eLGLK1fcEpbD2BWE
          source_id: s_DE9Es8tbGUmsydxcFJxzYj
          stance: supports
          locator: CBDB:198242
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_7qN_oP1uP-T_ZDIv8ctBcT
        subject_person_id: p_HCpgr1W9LMF6eGEBW7wXTQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CJ4VyLGZZgJRk8JF6RcE65
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_55hukWPW5ajGk3VkmWsSIN
          claim_id: c_7qN_oP1uP-T_ZDIv8ctBcT
          source_id: s_DE9Es8tbGUmsydxcFJxzYj
          stance: supports
          locator: 景泰二年進士登科錄:一卷，第三甲第九十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_HCpgr1W9LMF6eGEBW7wXTQ
        status: active
        display_name: 王以誠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_epBWsHaKJHhMgbVAh9BBZA
        subject_person_id: p_CJ4VyLGZZgJRk8JF6RcE65
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_71hsEEucZkH8dnJyp7Cjvs
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uixL8kRvLtjUoEbCyukRga
          claim_id: c_epBWsHaKJHhMgbVAh9BBZA
          source_id: s_qQ535tr9HED6pa9YdoCR0b
          stance: supports
          locator: 景泰二年進士登科錄:一卷，第三甲第九十三名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_qQ535tr9HED6pa9YdoCR0b
            source_type: api_record
            title: 中国历代人物传记资料库：匡氏(王儀妻)（CBDB 244975）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244975&o=json
            external_identifier: CBDB:244975
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_71hsEEucZkH8dnJyp7Cjvs
        status: active
        display_name: 匡氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_IfTn4sa4whAk-p8aF1mydS
        subject_person_id: p_LthjcxsctGA14WP74DMGD2
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_CJ4VyLGZZgJRk8JF6RcE65
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f3osep2qrRcYA1tD14SQpU
          claim_id: c_IfTn4sa4whAk-p8aF1mydS
          source_id: s_DE9Es8tbGUmsydxcFJxzYj
          stance: supports
          locator: 景泰二年進士登科錄:一卷，第三甲第九十三名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_LthjcxsctGA14WP74DMGD2
        status: active
        display_name: 王守道
        merged_into_person_id: null
    - claim:
        id: c_UcXIwBpuHKFs5yLeV2Yr4Y
        subject_person_id: p_1N1DMSNij1QVwie6MdHCh4
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_CJ4VyLGZZgJRk8JF6RcE65
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ld-Epd6lcvlU6C0E32VJXo
          claim_id: c_UcXIwBpuHKFs5yLeV2Yr4Y
          source_id: s_DE9Es8tbGUmsydxcFJxzYj
          stance: supports
          locator: 景泰二年進士登科錄:一卷，第三甲第九十三名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_1N1DMSNij1QVwie6MdHCh4
        status: active
        display_name: 王士巽
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_O3iXCGnOEiXsExDbcRQzAo
        subject_person_id: p_CJ4VyLGZZgJRk8JF6RcE65
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_TGnpXHeKWR8xDVyC1G6MTX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dw3nY-qogKp0lzyIM8cxb6
          claim_id: c_O3iXCGnOEiXsExDbcRQzAo
          source_id: s_kxSQCIkvrM0rsGed9ILV9H
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198242 王儀）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_kxSQCIkvrM0rsGed9ILV9H
            source_type: api_record
            title: 中国历代人物传记资料库：王侃（CBDB 245008）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245008&o=json
            external_identifier: CBDB:245008
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TGnpXHeKWR8xDVyC1G6MTX
        status: active
        display_name: 王侃
        merged_into_person_id: null
    - claim:
        id: c_xaZ-ZHv7uEa_nePwFCtnOv
        subject_person_id: p_CJ4VyLGZZgJRk8JF6RcE65
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_heBQAS8YxKacn4DAjy1qaZ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wYZy9ai41eOyytRob9D6hW
          claim_id: c_xaZ-ZHv7uEa_nePwFCtnOv
          source_id: s_xVnx879dkv3auIzo1CAqbr
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198242 王儀）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_xVnx879dkv3auIzo1CAqbr
            source_type: api_record
            title: 中国历代人物传记资料库：王佶（CBDB 245019）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245019&o=json
            external_identifier: CBDB:245019
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_heBQAS8YxKacn4DAjy1qaZ
        status: active
        display_name: 王佶
        merged_into_person_id: null
    - claim:
        id: c_LOtzplqyCSQEwrxukhQUZf
        subject_person_id: p_CJ4VyLGZZgJRk8JF6RcE65
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_qEe5Jjdk1SqJi5FRKi64U2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mPEp0Ljt7A73b0FKANmNhn
          claim_id: c_LOtzplqyCSQEwrxukhQUZf
          source_id: s_wbJXD0trNbF1ux7wp7zVwC
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 198242 王儀）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_wbJXD0trNbF1ux7wp7zVwC
            source_type: api_record
            title: 中国历代人物传记资料库：王胤（CBDB 244997）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244997&o=json
            external_identifier: CBDB:244997
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qEe5Jjdk1SqJi5FRKi64U2
        status: active
        display_name: 王胤
        merged_into_person_id: null
---

# 王儀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王儀 | accepted |
| birth.date | 1417年 | accepted |
| bio.summary | 王儀（生于1417年），明人物。景泰二年進士，籍贯常熟，入仕進士。（中国历代人物传记资料库 CBDB 198242） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HCpgr1W9LMF6eGEBW7wXTQ | 王以誠 | accepted |
| spouses | p_71hsEEucZkH8dnJyp7Cjvs | 匡氏 | accepted |
| ancestors | p_LthjcxsctGA14WP74DMGD2 | 王守道 | accepted |
| ancestors | p_1N1DMSNij1QVwie6MdHCh4 | 王士巽 | accepted |
| other | p_TGnpXHeKWR8xDVyC1G6MTX | 王侃 | accepted |
| other | p_heBQAS8YxKacn4DAjy1qaZ | 王佶 | accepted |
| other | p_qEe5Jjdk1SqJi5FRKi64U2 | 王胤 | accepted |

## 外部来源

- [中国历代人物传记资料库：匡氏(王儀妻)（CBDB 244975）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244975&o=json)
- [中国历代人物传记资料库：王佶（CBDB 245019）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245019&o=json)
- [中国历代人物传记资料库：王侃（CBDB 245008）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245008&o=json)
- [中国历代人物传记资料库：王儀（CBDB 198242）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198242&o=json)
- [中国历代人物传记资料库：王胤（CBDB 244997）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244997&o=json)
