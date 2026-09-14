---
schema: wang-person/v1
id: p_aJMiNXJSvn8avCPNUFL6Jr
status: active
merged_into: null
display_name: 王瓚
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zqsLKUpr52KuNKKJCQxxmm
        subject_person_id: p_aJMiNXJSvn8avCPNUFL6Jr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LYzXqzm7GqmRzQ9ceYws4R
          claim_id: c_zqsLKUpr52KuNKKJCQxxmm
          source_id: s_nsNS4tYiMyfHMLUzeivoSe
          stance: supports
          locator: CBDB:126892
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126892）
          source: &a1
            id: s_nsNS4tYiMyfHMLUzeivoSe
            source_type: api_record
            title: 中国历代人物传记资料库：王瓚（CBDB 126892）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126892&o=json
            external_identifier: CBDB:126892
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.288Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nATHcrCNiHA7YRd89qtLfP
        subject_person_id: p_aJMiNXJSvn8avCPNUFL6Jr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓚，明人物。明清進士進士，籍贯永嘉，入仕進士。（中国历代人物传记资料库 CBDB 126892）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bPlPGwziCzE8WUOQtajFVE
          claim_id: c_nATHcrCNiHA7YRd89qtLfP
          source_id: s_nsNS4tYiMyfHMLUzeivoSe
          stance: supports
          locator: CBDB:126892
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_voyUgdYB-wMCqg7GvQTr82
        subject_person_id: p_NkjrkfLSubJRquGWk6KTAC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aJMiNXJSvn8avCPNUFL6Jr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CKtPEZYLBxGrUB4Vrq2JEV
          claim_id: c_voyUgdYB-wMCqg7GvQTr82
          source_id: s_nsNS4tYiMyfHMLUzeivoSe
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第一甲第二名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_NkjrkfLSubJRquGWk6KTAC
        status: active
        display_name: 王祚
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_CsO6TMWq7U21bWoWJhTegc
        subject_person_id: p_aJMiNXJSvn8avCPNUFL6Jr
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_4kPB2RrYEPpnn3yndBexz9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ev5LpSdxx5n5P3Q6CI8ZYh
          claim_id: c_CsO6TMWq7U21bWoWJhTegc
          source_id: s_5aqyerNB411JGeiMNZmSJf
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第一甲第二名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5aqyerNB411JGeiMNZmSJf
            source_type: api_record
            title: 中国历代人物传记资料库：應氏(王瓚妻)（CBDB 266764）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266764&o=json
            external_identifier: CBDB:266764
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4kPB2RrYEPpnn3yndBexz9
        status: active
        display_name: 應氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_x9Qd7y4rDFbuPPM43GH1Jk
        subject_person_id: p_XVyXQn9mv4GWFDoLFJcVQ7
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_aJMiNXJSvn8avCPNUFL6Jr
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SCD6vxQbkGeQUrCXc6mBEg
          claim_id: c_x9Qd7y4rDFbuPPM43GH1Jk
          source_id: s_nsNS4tYiMyfHMLUzeivoSe
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第一甲第二名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_XVyXQn9mv4GWFDoLFJcVQ7
        status: active
        display_name: 王原宏
        merged_into_person_id: null
    - claim:
        id: c_RNqJBhoBcdlN-NjnF5YyyU
        subject_person_id: p_HK1Kd6YYcVadLhFCdPXNh3
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_aJMiNXJSvn8avCPNUFL6Jr
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cP2X-L4QE_37KTGShFgrC-
          claim_id: c_RNqJBhoBcdlN-NjnF5YyyU
          source_id: s_nsNS4tYiMyfHMLUzeivoSe
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第一甲第二名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_HK1Kd6YYcVadLhFCdPXNh3
        status: active
        display_name: 王文燠
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_sXcsDTaFCtaTR7yQH1ah2-
        subject_person_id: p_3Lhz8LSf7mstdCaD69ddPj
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_aJMiNXJSvn8avCPNUFL6Jr
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8VaG8pVet-guTebJ3Ms6jo
          claim_id: c_sXcsDTaFCtaTR7yQH1ah2-
          source_id: s__ZqvVMYd83WuNBd0GPcJOT
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126892 王瓚）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s__ZqvVMYd83WuNBd0GPcJOT
            source_type: api_record
            title: 中国历代人物传记资料库：王珫（CBDB 266768）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266768&o=json
            external_identifier: CBDB:266768
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3Lhz8LSf7mstdCaD69ddPj
        status: active
        display_name: 王珫
        merged_into_person_id: null
    - claim:
        id: c_xliPXqSgJnQTup57BqzIVX
        subject_person_id: p_6hPs3h2jLCkarQiCorCUQJ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_aJMiNXJSvn8avCPNUFL6Jr
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GS73p-9sURGyzvRdIxF1R6
          claim_id: c_xliPXqSgJnQTup57BqzIVX
          source_id: s_d9cYzj1NOhjrwgPXs7KX68
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126892 王瓚）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_d9cYzj1NOhjrwgPXs7KX68
            source_type: api_record
            title: 中国历代人物传记资料库：王預（CBDB 266765）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266765&o=json
            external_identifier: CBDB:266765
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6hPs3h2jLCkarQiCorCUQJ
        status: active
        display_name: 王預
        merged_into_person_id: null
    - claim:
        id: c_KhOnNBCB7oMEYa-6__iept
        subject_person_id: p_HXUX2XFYmFJicF3sMvu7i1
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_aJMiNXJSvn8avCPNUFL6Jr
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_b4gaAaTrx1vi3NSBSqLoFJ
          claim_id: c_KhOnNBCB7oMEYa-6__iept
          source_id: s_iN-LD-LKEI8Hj12REBXP7G
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126892 王瓚）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_iN-LD-LKEI8Hj12REBXP7G
            source_type: api_record
            title: 中国历代人物传记资料库：王珵（CBDB 266766）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266766&o=json
            external_identifier: CBDB:266766
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HXUX2XFYmFJicF3sMvu7i1
        status: active
        display_name: 王珵
        merged_into_person_id: null
    - claim:
        id: c_PxSV_FNBRZ73jFb1iZo-y4
        subject_person_id: p_NGbd2mH7UDvFHQwaMK5Ckp
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_aJMiNXJSvn8avCPNUFL6Jr
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pMwsjI1uowIufC6I856A_P
          claim_id: c_PxSV_FNBRZ73jFb1iZo-y4
          source_id: s_lqcLr7sdcqfD_LP7HiuXG8
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126892 王瓚）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_lqcLr7sdcqfD_LP7HiuXG8
            source_type: api_record
            title: 中国历代人物传记资料库：王琲（CBDB 266767）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266767&o=json
            external_identifier: CBDB:266767
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NGbd2mH7UDvFHQwaMK5Ckp
        status: active
        display_name: 王琲
        merged_into_person_id: null
---

# 王瓚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瓚 | accepted |
| bio.summary | 王瓚，明人物。明清進士進士，籍贯永嘉，入仕進士。（中国历代人物传记资料库 CBDB 126892） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_NkjrkfLSubJRquGWk6KTAC | 王祚 | accepted |
| spouses | p_4kPB2RrYEPpnn3yndBexz9 | 應氏 | accepted |
| ancestors | p_XVyXQn9mv4GWFDoLFJcVQ7 | 王原宏 | accepted |
| ancestors | p_HK1Kd6YYcVadLhFCdPXNh3 | 王文燠 | accepted |
| other | p_3Lhz8LSf7mstdCaD69ddPj | 王珫 | accepted |
| other | p_6hPs3h2jLCkarQiCorCUQJ | 王預 | accepted |
| other | p_HXUX2XFYmFJicF3sMvu7i1 | 王珵 | accepted |
| other | p_NGbd2mH7UDvFHQwaMK5Ckp | 王琲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琲（CBDB 266767）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266767&o=json)
- [中国历代人物传记资料库：王珵（CBDB 266766）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266766&o=json)
- [中国历代人物传记资料库：王珫（CBDB 266768）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266768&o=json)
- [中国历代人物传记资料库：王預（CBDB 266765）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266765&o=json)
- [中国历代人物传记资料库：王瓚（CBDB 126892）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126892&o=json)
- [中国历代人物传记资料库：應氏(王瓚妻)（CBDB 266764）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266764&o=json)
