---
schema: wang-person/v1
id: p_Juc7gHrPWxVDPs8WyTQNfW
status: active
merged_into: null
display_name: 王榮
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AHqu18CLYkNqWeYoZeK77K
        subject_person_id: p_Juc7gHrPWxVDPs8WyTQNfW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王榮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6BoUgxw6Syc25J4bScF9km
          claim_id: c_AHqu18CLYkNqWeYoZeK77K
          source_id: s_Bpw6CHKKJAwV2uFW3jCr63
          stance: supports
          locator: CBDB:161518
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（161518）
          source: &a1
            id: s_Bpw6CHKKJAwV2uFW3jCr63
            source_type: api_record
            title: 中国历代人物传记资料库：王榮（CBDB 161518）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=161518&o=json
            external_identifier: CBDB:161518
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.948Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PRkAH6v2hz2SFfMonScEr7
        subject_person_id: p_Juc7gHrPWxVDPs8WyTQNfW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王榮，唐人物。籍贯幽州。（中国历代人物传记资料库 CBDB 161518）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_p89__yCocxM3M3VRMJO1jp
          claim_id: c_PRkAH6v2hz2SFfMonScEr7
          source_id: s_Bpw6CHKKJAwV2uFW3jCr63
          stance: supports
          locator: CBDB:161518
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_FF67CCPoEmpge0mXpaWgkf
        subject_person_id: p_KwA4BczZFNDLrU21M7BCc2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Juc7gHrPWxVDPs8WyTQNfW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GOR69uVPKUIyT1UvdzHsoT
          claim_id: c_FF67CCPoEmpge0mXpaWgkf
          source_id: s_Bpw6CHKKJAwV2uFW3jCr63
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_KwA4BczZFNDLrU21M7BCc2
        status: active
        display_name: 王興
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王榮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王榮 | accepted |
| bio.summary | 王榮，唐人物。籍贯幽州。（中国历代人物传记资料库 CBDB 161518） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_KwA4BczZFNDLrU21M7BCc2 | 王興 | accepted |

## 外部来源

- [中国历代人物传记资料库：王榮（CBDB 161518）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=161518&o=json)
