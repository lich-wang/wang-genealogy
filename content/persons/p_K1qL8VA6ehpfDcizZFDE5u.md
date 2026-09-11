---
schema: wang-person/v1
id: p_K1qL8VA6ehpfDcizZFDE5u
status: active
merged_into: null
display_name: 王啟甡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2emK2rbkutsK6TaBM67mBF
        subject_person_id: p_K1qL8VA6ehpfDcizZFDE5u
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王啟甡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YBnQxFfoff49oPh6zkUwNA
          claim_id: c_2emK2rbkutsK6TaBM67mBF
          source_id: s_Fy5aMiiHMSdXw3vjb1Emkc
          stance: supports
          locator: CBDB:636555
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636555）
          source: &a1
            id: s_Fy5aMiiHMSdXw3vjb1Emkc
            source_type: api_record
            title: 中国历代人物传记资料库：王啟甡（CBDB 636555）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636555&o=json
            external_identifier: CBDB:636555
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.029Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Sa4Y4yfsUV2bx8uC8JW4Tx
        subject_person_id: p_K1qL8VA6ehpfDcizZFDE5u
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王啟甡，清人物。籍贯膠州，入仕監生，曾任主事。（中国历代人物传记资料库 CBDB 636555）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3VJWBW6r7ztnFw_ayDEaxH
          claim_id: c_Sa4Y4yfsUV2bx8uC8JW4Tx
          source_id: s_Fy5aMiiHMSdXw3vjb1Emkc
          stance: supports
          locator: CBDB:636555
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王啟甡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王啟甡 | accepted |
| bio.summary | 王啟甡，清人物。籍贯膠州，入仕監生，曾任主事。（中国历代人物传记资料库 CBDB 636555） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王啟甡（CBDB 636555）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636555&o=json)
