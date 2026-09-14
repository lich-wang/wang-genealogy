---
schema: wang-person/v1
id: p_42V1mjqbCc9WXuvE75bXCj
status: active
merged_into: null
display_name: 王朝陽
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oQXzyDxftFFdLnuGNmYj97
        subject_person_id: p_42V1mjqbCc9WXuvE75bXCj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝陽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RfunTUKXPtGDHS4wE8sQ8p
          claim_id: c_oQXzyDxftFFdLnuGNmYj97
          source_id: s_U8j9tCza38qAfY1F6tms8G
          stance: supports
          locator: CBDB:205436
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（205436）
          source: &a1
            id: s_U8j9tCza38qAfY1F6tms8G
            source_type: api_record
            title: 中国历代人物传记资料库：王朝陽（CBDB 205436）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205436&o=json
            external_identifier: CBDB:205436
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.860Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_8hXCUGHPWeqzmtg5dvP1wk
        subject_person_id: p_42V1mjqbCc9WXuvE75bXCj
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1531年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SAgNZi5xuFeBEX4m1B45LA
          claim_id: c_8hXCUGHPWeqzmtg5dvP1wk
          source_id: s_U8j9tCza38qAfY1F6tms8G
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
        id: c_vLFLaYzEgMwWuHUcouGQZu
        subject_person_id: p_42V1mjqbCc9WXuvE75bXCj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝陽（生于1531年），明人物。明清進士進士，籍贯慈溪，入仕進士。（中国历代人物传记资料库 CBDB 205436）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uJvcVyShMvTpJY8D10LAg-
          claim_id: c_vLFLaYzEgMwWuHUcouGQZu
          source_id: s_U8j9tCza38qAfY1F6tms8G
          stance: supports
          locator: CBDB:205436
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_jffn8iRNqCYrwkdY44OUNG
        subject_person_id: p_kkzsSnYMmMHCoMPoCC45w5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_42V1mjqbCc9WXuvE75bXCj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-vbNKqi3isfYGXi7XMJ-3B
          claim_id: c_jffn8iRNqCYrwkdY44OUNG
          source_id: s_U8j9tCza38qAfY1F6tms8G
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第二百七十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_kkzsSnYMmMHCoMPoCC45w5
        status: active
        display_name: 王愷
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_Q4LusTkjKcT0fjWO-cSCUI
        subject_person_id: p_42V1mjqbCc9WXuvE75bXCj
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_3r8GFSLCXB5rYpq5QpkHni
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Wpeu887-MrcviR3N0ggRNk
          claim_id: c_Q4LusTkjKcT0fjWO-cSCUI
          source_id: s_om_rdrkBpJUIYw2GaEcrjI
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第二百七十七名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_om_rdrkBpJUIYw2GaEcrjI
            source_type: api_record
            title: 中国历代人物传记资料库：沈氏(王朝陽妻)（CBDB 333150）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333150&o=json
            external_identifier: CBDB:333150
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3r8GFSLCXB5rYpq5QpkHni
        status: active
        display_name: 沈氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_yYOzu1zgnZasmWAdl79yy_
        subject_person_id: p_zosYkcxQevH6vBJeyWKJ34
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_42V1mjqbCc9WXuvE75bXCj
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LeLrfvid3ICpVNCfLj7aT1
          claim_id: c_yYOzu1zgnZasmWAdl79yy_
          source_id: s_U8j9tCza38qAfY1F6tms8G
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第二百七十七名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_zosYkcxQevH6vBJeyWKJ34
        status: active
        display_name: 王暹
        merged_into_person_id: null
    - claim:
        id: c_meecUklqF63zNNfMr_k6lF
        subject_person_id: p_TvdNjcDprn8c8u52eU8tSV
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_42V1mjqbCc9WXuvE75bXCj
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1YSGW1YxbsHwiqfe8NYtqB
          claim_id: c_meecUklqF63zNNfMr_k6lF
          source_id: s_U8j9tCza38qAfY1F6tms8G
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第二百七十七名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_TvdNjcDprn8c8u52eU8tSV
        status: active
        display_name: 王仕
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_7dFYOclxiCjc31JMv6eZPi
        subject_person_id: p_42V1mjqbCc9WXuvE75bXCj
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_9yFQPtxBcNVtREhgQLeWrx
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aH6OTC2yRO4GzgVRNw-BFf
          claim_id: c_7dFYOclxiCjc31JMv6eZPi
          source_id: s_6mpPGKwp3KwR5JtW4Zd33M
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205436 王朝陽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_6mpPGKwp3KwR5JtW4Zd33M
            source_type: api_record
            title: 中国历代人物传记资料库：王朝宸（CBDB 333151）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333151&o=json
            external_identifier: CBDB:333151
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9yFQPtxBcNVtREhgQLeWrx
        status: active
        display_name: 王朝宸
        merged_into_person_id: null
    - claim:
        id: c_B9XcTrstT-wcKA1mFmYkR9
        subject_person_id: p_42V1mjqbCc9WXuvE75bXCj
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RzZ1dQxXH2DcBFXXM1jEce
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_76IUEOfxtpDlmhqKsvdnRm
          claim_id: c_B9XcTrstT-wcKA1mFmYkR9
          source_id: s_yyIN3VWriCHxG2bhY-Qnrq
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205436 王朝陽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_yyIN3VWriCHxG2bhY-Qnrq
            source_type: api_record
            title: 中国历代人物传记资料库：王朝嶽（CBDB 333152）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333152&o=json
            external_identifier: CBDB:333152
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RzZ1dQxXH2DcBFXXM1jEce
        status: active
        display_name: 王朝嶽
        merged_into_person_id: null
---

# 王朝陽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朝陽 | accepted |
| birth.date | 1531年 | accepted |
| bio.summary | 王朝陽（生于1531年），明人物。明清進士進士，籍贯慈溪，入仕進士。（中国历代人物传记资料库 CBDB 205436） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_kkzsSnYMmMHCoMPoCC45w5 | 王愷 | accepted |
| spouses | p_3r8GFSLCXB5rYpq5QpkHni | 沈氏 | accepted |
| ancestors | p_zosYkcxQevH6vBJeyWKJ34 | 王暹 | accepted |
| ancestors | p_TvdNjcDprn8c8u52eU8tSV | 王仕 | accepted |
| other | p_9yFQPtxBcNVtREhgQLeWrx | 王朝宸 | accepted |
| other | p_RzZ1dQxXH2DcBFXXM1jEce | 王朝嶽 | accepted |

## 外部来源

- [中国历代人物传记资料库：沈氏(王朝陽妻)（CBDB 333150）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333150&o=json)
- [中国历代人物传记资料库：王朝宸（CBDB 333151）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333151&o=json)
- [中国历代人物传记资料库：王朝陽（CBDB 205436）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205436&o=json)
- [中国历代人物传记资料库：王朝嶽（CBDB 333152）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333152&o=json)
