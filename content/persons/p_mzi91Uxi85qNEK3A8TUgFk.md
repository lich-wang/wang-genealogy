---
schema: wang-person/v1
id: p_mzi91Uxi85qNEK3A8TUgFk
status: active
merged_into: null
display_name: 王鎔
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LMJFA6pXnPQtzrq8F42FL4
        subject_person_id: p_mzi91Uxi85qNEK3A8TUgFk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5D7i6Yh9aVhHao2PyXK7D6
          claim_id: c_LMJFA6pXnPQtzrq8F42FL4
          source_id: s_yxTgSggXZK7Mp9HkkNgo18
          stance: supports
          locator: CBDB:17634
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（17634）
          source: &a1
            id: s_yxTgSggXZK7Mp9HkkNgo18
            source_type: api_record
            title: 中国历代人物传记资料库：王鎔（CBDB 17634）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17634&o=json
            external_identifier: CBDB:17634
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.663Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EDCkV3A4LpJzvgSs91pzXB
        subject_person_id: p_mzi91Uxi85qNEK3A8TUgFk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎔，宋人物。籍贯東陽，入仕進士，曾任朝請大夫、朝散大夫、承議郎。（中国历代人物传记资料库 CBDB 17634）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XMozcI4knI8AwRtKnSncUB
          claim_id: c_EDCkV3A4LpJzvgSs91pzXB
          source_id: s_yxTgSggXZK7Mp9HkkNgo18
          stance: supports
          locator: CBDB:17634
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_GeTN8XVskHqEqbS17ve-mz
        subject_person_id: p_WNe6hDfHpUq7znyP4H9mA8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mzi91Uxi85qNEK3A8TUgFk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uN3KJsNxnCLToJOqdtGRQa
          claim_id: c_GeTN8XVskHqEqbS17ve-mz
          source_id: s_NzKVR2g1HZFJtBi3Kl-DsL
          stance: supports
          locator: CBDB 亲属：父（KinPerson 17666）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_NzKVR2g1HZFJtBi3Kl-DsL
            source_type: api_record
            title: 中国历代人物传记资料库：王鎔（CBDB 17634）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17634&o=json
            external_identifier: CBDB:17634
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WNe6hDfHpUq7znyP4H9mA8
        status: active
        display_name: 王師伋
        merged_into_person_id: null
    - claim:
        id: c_zeKoZ-fvTE_9h4YmyPGL5u
        subject_person_id: p_Ycdxbn3GZ4uAAxqbdiXaXw
        claim_kind: relationship
        predicate: kinship.mother_of
        object_person_id: p_mzi91Uxi85qNEK3A8TUgFk
        generation_count: null
        parent_role: mother
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Bk3rUg_ELHxYIGs6Z0w49k
          claim_id: c_zeKoZ-fvTE_9h4YmyPGL5u
          source_id: s_NzKVR2g1HZFJtBi3Kl-DsL
          stance: supports
          locator: CBDB 亲属：母（KinPerson 5282）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_NzKVR2g1HZFJtBi3Kl-DsL
            source_type: api_record
            title: 中国历代人物传记资料库：王鎔（CBDB 17634）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17634&o=json
            external_identifier: CBDB:17634
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Ycdxbn3GZ4uAAxqbdiXaXw
        status: active
        display_name: 宗惠真
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_MpyifadHmjfGbMaREtnFuk
        subject_person_id: p_mzi91Uxi85qNEK3A8TUgFk
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yPaZGPPMfNV1vZCbGnNijM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_72HIW5Oq19_oG7QIX4MfgF
          claim_id: c_MpyifadHmjfGbMaREtnFuk
          source_id: s_NzKVR2g1HZFJtBi3Kl-DsL
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 384934 王囦金）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_NzKVR2g1HZFJtBi3Kl-DsL
            source_type: api_record
            title: 中国历代人物传记资料库：王鎔（CBDB 17634）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17634&o=json
            external_identifier: CBDB:17634
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yPaZGPPMfNV1vZCbGnNijM
        status: active
        display_name: 王囦金
        merged_into_person_id: null
---

# 王鎔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鎔 | accepted |
| bio.summary | 王鎔，宋人物。籍贯東陽，入仕進士，曾任朝請大夫、朝散大夫、承議郎。（中国历代人物传记资料库 CBDB 17634） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_WNe6hDfHpUq7znyP4H9mA8 | 王師伋 | accepted |
| parents | p_Ycdxbn3GZ4uAAxqbdiXaXw | 宗惠真 | accepted |
| other | p_yPaZGPPMfNV1vZCbGnNijM | 王囦金 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鎔（CBDB 17634）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17634&o=json)
