---
schema: wang-person/v1
id: p_8wg5cR6vkEPrWyh2yu2Nbh
status: active
merged_into: null
display_name: 王楙
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dzKfCMdR8mQudbVBbAkpNN
        subject_person_id: p_8wg5cR6vkEPrWyh2yu2Nbh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DjViUpjcamBaxsBvkt1V2p
          claim_id: c_dzKfCMdR8mQudbVBbAkpNN
          source_id: s_ER1KwCZXdEaAsM4fG9D7bN
          stance: supports
          locator: CBDB:10342
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（10342）
          source: &a1
            id: s_ER1KwCZXdEaAsM4fG9D7bN
            source_type: api_record
            title: 中国历代人物传记资料库：王楙（CBDB 10342）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10342&o=json
            external_identifier: CBDB:10342
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.533Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_i6rhfVHinLKWoTGCWybzvR
        subject_person_id: p_8wg5cR6vkEPrWyh2yu2Nbh
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1151年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_r2taWBo6XC9u96Pn866D9v
          claim_id: c_i6rhfVHinLKWoTGCWybzvR
          source_id: s_ER1KwCZXdEaAsM4fG9D7bN
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_qaoq9JZcmqUonrSxZPGC8T
        subject_person_id: p_8wg5cR6vkEPrWyh2yu2Nbh
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1213年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mGic1GLeu2UXq38Wb5ETd1
          claim_id: c_qaoq9JZcmqUonrSxZPGC8T
          source_id: s_ER1KwCZXdEaAsM4fG9D7bN
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_u1f8eX5nX2eDEHN4a75NEK
        subject_person_id: p_8wg5cR6vkEPrWyh2yu2Nbh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楙（1151年—1213年），宋人物。籍贯吳江，身份为孝子/孝女、士人。（中国历代人物传记资料库 CBDB 10342）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_m1eXnLOiK_WIQ0PQqCHNa9
          claim_id: c_u1f8eX5nX2eDEHN4a75NEK
          source_id: s_ER1KwCZXdEaAsM4fG9D7bN
          stance: supports
          locator: CBDB:10342
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Fnc3Biq_95mRz75E7-wYUC
        subject_person_id: p_RSUipjDpHxz3E9HHKd8tnd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8wg5cR6vkEPrWyh2yu2Nbh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LcHkkwac17BY2SfW-qmuFT
          claim_id: c_Fnc3Biq_95mRz75E7-wYUC
          source_id: s_ER1KwCZXdEaAsM4fG9D7bN
          stance: supports
          locator: CBDB 双向互证（父 王大成 ⇄ 子 王楙）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_RSUipjDpHxz3E9HHKd8tnd
        status: active
        display_name: 王大成
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_xpXlIXp6b0a3kzUoCBFk_N
        subject_person_id: p_8wg5cR6vkEPrWyh2yu2Nbh
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ETmjdmNWuRGDjjPH8p2fvR
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sqbHTHxO-F0tGZSwhGH_gN
          claim_id: c_xpXlIXp6b0a3kzUoCBFk_N
          source_id: s_ER1KwCZXdEaAsM4fG9D7bN
          stance: supports
          locator: 宋人傳記資料索引(電子版)，769：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ETmjdmNWuRGDjjPH8p2fvR
        status: active
        display_name: 王敄
        merged_into_person_id: null
  other: []
---

# 王楙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王楙 | accepted |
| birth.date | 1151年 | accepted |
| death.date | 1213年 | accepted |
| bio.summary | 王楙（1151年—1213年），宋人物。籍贯吳江，身份为孝子/孝女、士人。（中国历代人物传记资料库 CBDB 10342） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_RSUipjDpHxz3E9HHKd8tnd | 王大成 | accepted |
| descendants | p_ETmjdmNWuRGDjjPH8p2fvR | 王敄 | accepted |

## 外部来源

- [中国历代人物传记资料库：王楙（CBDB 10342）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10342&o=json)
