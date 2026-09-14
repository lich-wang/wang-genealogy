---
schema: wang-person/v1
id: p_p2gM1mATmRAMnvVgUtfH2R
status: active
merged_into: null
display_name: 王開
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ATv6j16h1KLGiWkkjCAJHS
        subject_person_id: p_p2gM1mATmRAMnvVgUtfH2R
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王開
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BdJ7TCA6N5Tm3Qe3K31go1
          claim_id: c_ATv6j16h1KLGiWkkjCAJHS
          source_id: s_HBEC8yYG35aN85UzPpdDrh
          stance: supports
          locator: CBDB:323756
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（323756）
          source: &a1
            id: s_HBEC8yYG35aN85UzPpdDrh
            source_type: api_record
            title: 中国历代人物传记资料库：王開（CBDB 323756）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323756&o=json
            external_identifier: CBDB:323756
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.150Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8yvA1vJWRL1Pbqx7Ava43n
        subject_person_id: p_p2gM1mATmRAMnvVgUtfH2R
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王開，明人物。嘉靖三十八年進士，籍贯清苑，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 323756）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_G4_LfGs5kHSdNKJSChjFAX
          claim_id: c_8yvA1vJWRL1Pbqx7Ava43n
          source_id: s_HBEC8yYG35aN85UzPpdDrh
          stance: supports
          locator: CBDB:323756
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Gf9vmRGCkUPeD0MXO1gSyN
        subject_person_id: p_7qYVpNXr3rJeGDwdypL9Mb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_p2gM1mATmRAMnvVgUtfH2R
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P5gnc9yvXfDqiYKV5pDQds
          claim_id: c_Gf9vmRGCkUPeD0MXO1gSyN
          source_id: s_Y7IMKw8qwmIGbf2yACNhWi
          stance: supports
          locator: CBDB：兄弟 王闐（204766）之父／母 王德純
          quotation: null
          interpretation_note: 由兄弟关系推断：王開 与 王闐 为同胞（CBDB 记「兄」），王闐 之父／母即 王開 之父／母。
          source:
            id: s_Y7IMKw8qwmIGbf2yACNhWi
            source_type: api_record
            title: 中国历代人物传记资料库：王開（CBDB 323756）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323756&o=json
            external_identifier: CBDB:323756
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7qYVpNXr3rJeGDwdypL9Mb
        status: active
        display_name: 王德純
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_qoKMBraPx4ZKh-L6w2BEga
        subject_person_id: p_ck5AXM5Fx2KaAGeW6x29ur
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_p2gM1mATmRAMnvVgUtfH2R
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hL9tXnAtOaHrFfQxDQfp61
          claim_id: c_qoKMBraPx4ZKh-L6w2BEga
          source_id: s_Y7IMKw8qwmIGbf2yACNhWi
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204766 王闐）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Y7IMKw8qwmIGbf2yACNhWi
            source_type: api_record
            title: 中国历代人物传记资料库：王開（CBDB 323756）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323756&o=json
            external_identifier: CBDB:323756
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ck5AXM5Fx2KaAGeW6x29ur
        status: active
        display_name: 王闐
        merged_into_person_id: null
---

# 王開

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王開 | accepted |
| bio.summary | 王開，明人物。嘉靖三十八年進士，籍贯清苑，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 323756） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7qYVpNXr3rJeGDwdypL9Mb | 王德純 | accepted |
| other | p_ck5AXM5Fx2KaAGeW6x29ur | 王闐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王開（CBDB 323756）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323756&o=json)
