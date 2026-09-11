---
schema: wang-person/v1
id: p_JML3zLgbrajmhN4fDU1Pka
status: active
merged_into: null
display_name: 王交
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LyoKDEuvWfQZpngCwfvTw9
        subject_person_id: p_JML3zLgbrajmhN4fDU1Pka
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王交
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uoRB6ssMdU6TzMz37Xan5j
          claim_id: c_LyoKDEuvWfQZpngCwfvTw9
          source_id: s_sJ3iEzhs44udb87E8NcpTD
          stance: supports
          locator: CBDB:126505
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126505）
          source: &a1
            id: s_sJ3iEzhs44udb87E8NcpTD
            source_type: api_record
            title: 中国历代人物传记资料库：王交（CBDB 126505）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126505&o=json
            external_identifier: CBDB:126505
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.990Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kAWcm8XJv8zLQZoss26v98
        subject_person_id: p_JML3zLgbrajmhN4fDU1Pka
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王交，明人物。籍贯慈溪，身份为博學之人，入仕進士，曾任太僕寺丞。（中国历代人物传记资料库 CBDB 126505）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_t3qe0r3pShHlaD9KDICls8
          claim_id: c_kAWcm8XJv8zLQZoss26v98
          source_id: s_sJ3iEzhs44udb87E8NcpTD
          stance: supports
          locator: CBDB:126505
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_5uUpbunvudwqA8F8L-ZSWC
        subject_person_id: p_zsVFNTYzGiADoYvqX8wVfc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JML3zLgbrajmhN4fDU1Pka
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ar0og17444_1cCZRTBPqjw
          claim_id: c_5uUpbunvudwqA8F8L-ZSWC
          source_id: s_sJ3iEzhs44udb87E8NcpTD
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第一百三十九名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_zsVFNTYzGiADoYvqX8wVfc
        status: active
        display_name: 王嵱
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_-kKIIKxw2RUTjEJ8XKL-Bu
        subject_person_id: p_JML3zLgbrajmhN4fDU1Pka
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_qZkN8xrVwF2tSmSA9Y6KbW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-7_MXwMEpLvPeT4tbzPVMJ
          claim_id: c_-kKIIKxw2RUTjEJ8XKL-Bu
          source_id: s_RcFCMmTChAEGIRPn-zOsB0
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第一百三十九名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_RcFCMmTChAEGIRPn-zOsB0
            source_type: api_record
            title: 中国历代人物传记资料库：費氏(王交妻)（CBDB 304533）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304533&o=json
            external_identifier: CBDB:304533
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_qZkN8xrVwF2tSmSA9Y6KbW
        status: active
        display_name: 費氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_KTit0cTdSpuFfoG0VqQ6Mo
        subject_person_id: p_KhQZ4rkBabwAVX8vrHF7JY
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_JML3zLgbrajmhN4fDU1Pka
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_--DZJML1Q0gadaG7H5THyS
          claim_id: c_KTit0cTdSpuFfoG0VqQ6Mo
          source_id: s_sJ3iEzhs44udb87E8NcpTD
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第一百三十九名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_KhQZ4rkBabwAVX8vrHF7JY
        status: active
        display_name: 王濂
        merged_into_person_id: null
    - claim:
        id: c_PkuDJ-ry9MqlKe0U6YnizE
        subject_person_id: p_PWySVEEHd7WgHjTPbweChX
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_JML3zLgbrajmhN4fDU1Pka
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Vb49FujZ7uRq-g9OUmWpgN
          claim_id: c_PkuDJ-ry9MqlKe0U6YnizE
          source_id: s_sJ3iEzhs44udb87E8NcpTD
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第一百三十九名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_PWySVEEHd7WgHjTPbweChX
        status: active
        display_name: 王珫
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王交

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王交 | accepted |
| bio.summary | 王交，明人物。籍贯慈溪，身份为博學之人，入仕進士，曾任太僕寺丞。（中国历代人物传记资料库 CBDB 126505） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_zsVFNTYzGiADoYvqX8wVfc | 王嵱 | accepted |
| spouses | p_qZkN8xrVwF2tSmSA9Y6KbW | 費氏 | accepted |
| ancestors | p_KhQZ4rkBabwAVX8vrHF7JY | 王濂 | accepted |
| ancestors | p_PWySVEEHd7WgHjTPbweChX | 王珫 | accepted |

## 外部来源

- [中国历代人物传记资料库：費氏(王交妻)（CBDB 304533）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304533&o=json)
- [中国历代人物传记资料库：王交（CBDB 126505）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126505&o=json)
